import "./App.scss";
import "aos/dist/aos.css";

import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import MySkills from "./components/myskills/myskills";
import Aboutme from "./components/aboutme/aboutme";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Aboutme />
      <MySkills  />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
