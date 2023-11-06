import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

function App() {
  const aboutRef = useRef();
  const productsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar onClick={() => scrollToSection()} />
      <Layout>
        <Hero />
        <About ref={aboutRef} />
        <Products ref={productsRef} />
        <Contact ref={contactRef} />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
