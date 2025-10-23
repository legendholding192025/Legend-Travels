import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legend Travels - Discover Your Next Adventure",
  description: "Explore the world with Legend Travels. Discover amazing destinations, book unforgettable experiences, and create memories that last a lifetime.",
  keywords: "travel, vacation, adventure, destinations, booking, tours, flights, hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">
        {children}
      </body>
    </html>
  );
}
