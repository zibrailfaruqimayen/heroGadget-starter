import Header from "./components/Header";
import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
