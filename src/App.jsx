import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/home.css";
import "./css/sobremi.css"
import "./css/contacto.css"
import "./css/habilidades.css"
import "./css/proyecto.css"
import Sobre_mi from "./componentes/Sobre_mi";
import Habilidades from "./componentes/Habilidades";
import Home from "./componentes/Home";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<Sobre_mi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
