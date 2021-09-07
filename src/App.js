import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from './components/TextForm';
// import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze"/>
      </div>
       {/* <About /> */}
    </>
  );
}

export default App;
