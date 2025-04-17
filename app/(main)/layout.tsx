import { Header } from "@/components/header";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className="">
            {children}
        </section>
      </body>
    </html>
  );
}
