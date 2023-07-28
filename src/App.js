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
import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "G-V28WTFPK7G";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/" });

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
