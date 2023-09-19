import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

//an ex of composing a two components
//Page is the parent component and Header,Footer,MainContent are child components
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
