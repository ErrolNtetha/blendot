import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="bg-[#F8F5F2]">
            {children}
        </section>
      </body>
    </html>
  );
}
