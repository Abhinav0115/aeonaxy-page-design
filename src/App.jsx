// import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Main from "./components/main-section/main";

function App() {
    return (
        <>
            {/* Navbar component */}
            <Navbar />
            {/* Main component */}
            <Main />
            {/* Footer component */}
            <Footer />
        </>
    );
}

export default App;
