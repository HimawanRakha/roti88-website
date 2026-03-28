import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Promo from "@/components/Promo";
import CTA from "@/components/CTA";
import FindUs from "@/components/Outlet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <CTA />
      <Promo />
      <FindUs />
      <Footer />
    </main>
  );
}
