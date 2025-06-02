import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            {/* <Route path="/categorias" element={} /> */}
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
