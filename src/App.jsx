import "./App.css";
import AboutUs from "./components/AboutUs";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import OurLaurels from "./components/OurLaurels";
import Subscribe from "./components/Subscribe";
import TheChef from "./components/TheChef";

function App() {
  return (
    <>
      <div className="container  overflow-x-hidden">
        <Navbar />
        <Header />
        <AboutUs />
        <Menu />
        <TheChef />
      </div>
      <IntroVideo />
      <OurLaurels />
      <Gallery />
      <FindUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
