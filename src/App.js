import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <About />
        <Products />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
