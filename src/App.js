import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import ReactGA from "react-ga";

function initialGA() {
  ReactGA.initialize("G-CVCQGWZHLY");
  ReactGA.pageview("homePage");
}

function App() {
  initialGA();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro darkMode={darkMode} />
      <About />
      <ProductList />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <ToastContainer />
    </div>
  );
}

export default App;
