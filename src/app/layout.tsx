import Footer from "../widget/footer/footer";
import Header from "../widget/header/header";
import "../shared/styles/globals.css";
import { Providers } from "../shared/theme/theme.provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
