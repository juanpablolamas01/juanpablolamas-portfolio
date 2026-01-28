import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Juan Pablo Lamas - Product Designer",
  description: "Product Designer — Engineering-driven, business-oriented. Helping startups and companies to create better products through design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
