import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./session-provider";

const soleilBold = localFont({
  src: "./fonts/SoleilBold.otf",
  variable: "--font-soleil-bold",
  weight: "100 900",
});
const soleilRegular = localFont({
  src: "./fonts/SoleilRegular.otf",
  variable: "--font-soleil",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Plant. Share. Connect - Blendot",
  description: "Connect with fellow gardeners in your neighborhood to exchange seeds, seedlings and harvest. Cultivate relationships while growing your garden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soleilRegular.variable} ${soleilBold.variable} antialiased`}
      >
        <AuthProvider>
        <section className="min-h-screen bg-[#F8F5F2]">
            {children}
        </section>
        </AuthProvider>
      </body>
    </html>
  );
}
