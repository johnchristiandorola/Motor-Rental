import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Models from "./components/Models";
import About from "./components/About";
import Book from "./components/Book";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Book />
      <Models />
      <About />
      <Testimonials />
    </div>
  );
}

export default App;
