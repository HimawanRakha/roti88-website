import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Promo from "@/components/Promo";
import CTA from "@/components/CTA";
import FindUs from "@/components/Outlet";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Roti88",
            image: "../images/logo.png",
            url: "https://roti88-website.vercel.app/",
            telephone: "6282142634989",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lumajang",
              addressRegion: "Jawa Timur",
              addressCountry: "ID",
            },
          }),
        }}
      />
      <main>
        <Hero />
        <About />
        <Products />
        <CTA />
        <Promo />
        <FindUs />
      </main>
    </>
  );
}
