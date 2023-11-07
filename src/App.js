import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const handleScrollButtonVisibility = () => {
  //     window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
  //   };
  //   window.addEventListener("scroll", handleScrollButtonVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollButtonVisibility);
  //   };
  // }, []);

  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <>
      <Navbar />
      {/* {showButton && (
        <div className="scrollToTop">
          <button onClick={handleScrollToTop}>
            <img></img>
          </button>
        </div>
      )} */}
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
