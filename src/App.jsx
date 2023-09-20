import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

function App() {
  return (
    <>
      <div className="Container-Div">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
