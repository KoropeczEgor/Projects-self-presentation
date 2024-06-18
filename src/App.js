import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Contact from "./components/contact";
import "./bootstrap-4.0.0-dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Contact />
    </div>
  );
}

export default App;
