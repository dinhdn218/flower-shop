# Amor Florist redesign

Goal: implement the selected romantic boutique direction using the existing Next.js application.
Design: warm cream, dusty rose and olive; serif display headings, spacious floral photography, responsive two-column mobile catalogs. Existing cart, wishlist and checkout remain connected. Floral SVG favicon uses Next.js icon convention.
Approaches: selected elegant botanical boutique; alternative youthful peach direction was not selected.

- [x] Rebuild home with image hero, occasions, curated products and story.
- [x] Update shared navigation and product cards, including accessible mobile controls.
- [x] Apply palette across existing pages and footer; add floral icon.
- [x] Production build and TypeScript passed. Changed-file lint passed. Home, catalogs, cart, wishlist and icons returned HTTP 200. Desktop 1440px and mobile 390px screenshots inspected. Full-project lint has pre-existing failures outside redesign scope.


## Follow-up: consistent catalogs, details and chat (2026-10-28)
- Replaced system Georgia display text with bundled Lora Vietnamese subsets; removed tight display tracking. Source strings confirmed NFC before changing fonts.
- Shared ProductCollection now serves six occasion pages, three curated catalogs, dynamic categories and wishlist. Sorting uses real product data.
- Rebuilt product detail gallery, quantity controls, cart and wishlist actions, related products and care guide.
- Rebuilt chat panel in cream/olive with accessible labels, Escape and outside-click dismissal; direct contact links no longer load unused SDK.
- Validation: production build and TypeScript passed; changed-file ESLint passed. Browser checks passed for 12 routes, sorting, cart quantity, wishlist, chat dismissal, mobile overflow and zero page errors. Inspected desktop and mobile screenshots including corrected Vietnamese title.

## Readability and cart feedback follow-up
- Switched body to Be Vietnam Pro and display headings to Noto Serif with Vietnamese subsets. Increased content to 16px, navigation/buttons to 14–15px and supporting text to 12–14px.
- Added shared CartFeedbackProvider for card/detail actions: temporary success button, replayable cart bounce and animated product confirmation with cart link, dismissal and timed reset. Respects reduced motion and pauses dismissal while hovered/focused.
- Verification: first browser check failed for missing cart confirmation, then passed after implementation. Production build/TypeScript and changed-file lint passed. Browser checks cover repeated additions, detail quantities, automatic/manual dismissal, cart navigation, reduced motion and mobile boundaries. Inspected screenshots at 1353px/390px; checked five routes at each width for overflow.

## Full-site consistency audit (2026-10-28)
- Rebuilt footer and scroll-to-top control; removed legacy vivid accents and gradients. Added explicit olive tokens and warm neutral tokens for shared text, inputs and borders.
- Rebuilt About and Contact with the same typography, spacing, botanical intro and cream/olive surfaces. Contact form explicitly composes email because no contact delivery endpoint exists.
- Restyled policies, ordering guide, cart, checkout and success route. Corrected mobile guide layout, incorrect policy hotline URL and removed a broken secondary product image. Success page no longer displays a fabricated order ID or unsupported email promise.
- Rebuilt admin login and order dashboard with typed data, inline errors, refresh, sign-out, search, status filtering and responsive order cards. Admin tests intercepted API calls using synthetic orders; no real orders were accessed or created.
- Found direct checkout hydration redirect during browser audit. Cart now uses a subscription-backed store that loads saved data before checkout decides to redirect. Persistence avoids the initial empty-cart overwrite. Checkout success navigation is protected from the empty-cart redirect.
- Final checks: production build/TypeScript passed; all files changed in this audit pass ESLint; diff check passed. Browser automation passed 108 route/viewport checks (54 routes at 1353px and 390px), no legacy accent classes, no horizontal overflow and no page errors. Verified contact validation, guide disclosure, mocked admin login failure/success/search/status/logout, and mocked checkout submission. Cart feedback regression also passed, including reduced-motion support.
- Inspected desktop/mobile screenshots of About, Contact, footer, guide, policies, cart, checkout, admin login and admin dashboard. Production preview remains on port 3100.

## Layout completeness correction
- Follow-up review found that cart, checkout, policies and ordering guide had retained their original layout after the prior palette audit. The earlier route checks demonstrated technical consistency, not complete layout redesign.
- Rebuilt cart (loading, empty with recommendations and populated states), checkout, and information-page shells. Added shared PurchaseSteps and OrderSummary and removed 34 obsolete utility-page override rules. Added a custom botanical 404 page.
- Cart supports quantity/total updates, explicit removal, persistence and recommendations. Checkout has native labels/validation, selected payment styles and inline API failure/retry feedback. Existing order API contract retained.
- Production build and TypeScript passed; changed-file lint and diff checks passed. Full browser audit passed again (54 routes at desktop/mobile). Additional browser tests passed empty/populated cart, quantity/total math, reload persistence, remove/re-add, checkout validation/payment/failure/retry/success via intercepted API, empty-checkout redirect and custom 404. No real orders created.
- Visually inspected new desktop/mobile cart and checkout, empty cart and information page screenshots before delivery.

## Information page content correction
- Audit found the ordering guide and policies still rendered their original utility-class content (bold sans headings, emoji labels, white CTA buttons) inside the new shell. Rebuilt both with shared markers, eyebrows, serif headings, notes, outline buttons and the site-wide consultation CTA; removed CSS overrides that targeted Tailwind utility classes.
- Verification: production build/TypeScript passed; changed-file lint and diff checks passed. Browser audit of 22 routes at 1353px and 390px found one heading font, one body font, one background, no horizontal overflow and no page errors.

## Accessibility, layout frame and favicon follow-up
- Audit found ~50 text/background pairs below 4.5:1, text down to 9px, touch targets down to 20px, a default `▶` marker on the occasion menu, a permanent "0" cart badge and no skip link. Added `--text-muted`/`--text-accent` tokens (≥4.66:1 on every light surface), raised all non-logo text to 12px, extended links and controls to 44px, rebuilt the occasion menu (chevron, outside click, Escape, closes on navigation), grouped the mobile menu and added a skip link.
- Mobile hero now shows the flowers first; cart and checkout use a compact intro with short breadcrumbs; checkout defaults to Hà Nội.
- Product data: removed duplicated gallery entries and non-flower placeholder photos. Names and descriptions still do not match many photos; needs the shop's real product photography.
- Layout: added `--page-max`, `--page-narrow`, `--page-gutter` and `--page-inline`; every band now shares one content edge (86–1354 at 1440px, 600–1960 at 2560px) instead of four different widths.
- Favicon: replaced a 16-colour 64px ICO (rendered grey) and a 64px touch icon with the Flower2 mark on olive: ICO 16/32/48, SVG, 180px apple icon and a manifest with 192/512/maskable icons; removed duplicate icon tags.
- Verification: build, TypeScript, changed-file lint and diff check passed. Browser audit: 0 contrast failures outside photo overlays, 0 sub-24px targets on mobile except inline/radio exemptions, no overflow or page errors on 22 routes × 2 viewports; dropdown, favicon and manifest behaviour checked.

## Form fields and product zoom
- Selects use a custom chevron with 44px right padding instead of the native arrow. Field focus is one shared rule: a 2px olive ring on the field border (offset −2px) instead of three rules with 2px gaps and mixed colours.
- Product detail main photo zooms 1.6× toward the pointer on hover (mouse only); resets on leave. Sharpness is limited by the 736–800px source photos.
