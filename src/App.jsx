import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";
import RegistroEmpleado from "./components/sections/RegistroEmpleado.jsx";
import RegistroUsuario from "./components/sections/RegistroUsuario.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrousuario" element={<RegistroUsuario />} />
            <Route path="/registroempleado" element={<RegistroEmpleado />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
