import "./App.css";
import './Components/components.css'
import './Components/Responsive.css'

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MainProduct from "./Components/Main-Product/MainProduct";
import Features from "./Components/Features/Features";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MainProduct />
      <Features />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
