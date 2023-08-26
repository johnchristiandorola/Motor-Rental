import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Models from "./components/Models";
import About from "./components/About";
import Book from "./components/Book";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <Book />
      <Models />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
