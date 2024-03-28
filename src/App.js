import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import { ContextProvider } from "./context";


function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routing />
        <Footer />
      </ContextProvider>
      
    </>
  );
}

export default App;
