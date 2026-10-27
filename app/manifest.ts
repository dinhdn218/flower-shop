import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amor Florist - Tiệm hoa của tình yêu",
    short_name: "Amor Florist",
    start_url: "/",
    display: "browser",
    background_color: "#fbf8f3",
    theme_color: "#545e42",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
