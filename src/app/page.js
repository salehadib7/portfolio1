import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import ProductList from "@/components/productList/ProductList";
import Toggle from "@/components/toogle/Toggle";
import ThemeStyleProvider from "./ThemeStyleProvider";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <ThemeStyleProvider>
        <Hero />
        <Toggle />
        <About />
        <ProductList />
        <Contact />
      </ThemeStyleProvider>
      <Footer />
    </>
  );
}
