"use client";
import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { Product, CartItem } from "./types";
interface CartContextType {
  cart: CartItem[];
  isHydrated: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
const storageKey = "amor-florist-cart";
const emptySnapshot = { cart: [] as CartItem[], isHydrated: false };
function createCartStore() {
  let snapshot = emptySnapshot;
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach((listener) => listener());
  const hydrate = () => {
    let cart: CartItem[] = [];
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (
        Array.isArray(saved) &&
        saved.every(
          (item) =>
            item?.product?.id &&
            typeof item.product.price === "number" &&
            Number.isFinite(item.quantity) &&
            item.quantity > 0,
        )
      )
        cart = saved;
    } catch {
      /* Keep the cart usable if browser storage is unavailable. */
    }
    snapshot = { cart, isHydrated: true };
    notify();
  };
  return {
    getSnapshot: () => snapshot,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      if (!snapshot.isHydrated) hydrate();
      const onStorage = (event: StorageEvent) => {
        if (event.key === storageKey || event.key === null) hydrate();
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
    update: (change: (cart: CartItem[]) => CartItem[]) => {
      const cart = change(snapshot.cart);
      snapshot = { cart, isHydrated: true };
      try {
        localStorage.setItem(storageKey, JSON.stringify(cart));
      } catch {
        /* The in-memory cart remains available. */
      }
      notify();
    },
  };
}
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(createCartStore);
  const { cart, isHydrated } = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    () => emptySnapshot,
  );
  const removeFromCart = (id: string) =>
    store.update((items) => items.filter((item) => item.product.id !== id));
  return (
    <CartContext.Provider
      value={{
        cart,
        isHydrated,
        addToCart: (product, quantity = 1) => {
          store.update((items) =>
            items.some((item) => item.product.id === product.id)
              ? items.map((item) =>
                  item.product.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item,
                )
              : [...items, { product, quantity }],
          );
        },
        removeFromCart,
        updateQuantity: (id, quantity) => {
          if (quantity <= 0) removeFromCart(id);
          else
            store.update((items) =>
              items.map((item) =>
                item.product.id === id ? { ...item, quantity } : item,
              ),
            );
        },
        clearCart: () => store.update(() => []),
        getTotalItems: () =>
          cart.reduce((total, item) => total + item.quantity, 0),
        getTotalPrice: () =>
          cart.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0,
          ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within a CartProvider");
  return value;
}
