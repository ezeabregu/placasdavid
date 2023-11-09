import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";

function App() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      {backToTopButton && <Button />}
      <Layout>
        <Hero />
        <About />
        <Products />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
