import "./App.css";
import Navbar from "./Components/Navbar";
import Proposals from "./Components/Proposals";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProposal from "./Components/NewProposal";
import About from "./Components/About";
import FullProposal from "./Components/FullProposal";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Proposals />}></Route>
          <Route exact path="/new-proposal" element={<NewProposal />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="proposal/:index" element={<FullProposal />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
