import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

import "./bootstrap-4.0.0-dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
