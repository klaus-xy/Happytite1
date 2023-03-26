import "./App.scss";
import Nav from "./components/Nav";
import Tips from "./components/Tips";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
