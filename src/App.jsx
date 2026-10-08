import { useState } from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Footer from "./Components/Footer.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import DwellingList from "./Components/DwellingList.jsx";
import viviendas from "../db.json";

function normalizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function ordenar(lista, orden) {
  if (orden === "asc") return [...lista].sort((a, b) => a.renta - b.renta);
  if (orden === "desc") return [...lista].sort((a, b) => b.renta - a.renta);
  return lista;
}

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("ninguno");
  const [vista, setVista] = useState("rejilla");

  function limpiar() {
    setBusqueda("");
    setOrden("ninguno");
  }

  const ordenadas = ordenar(viviendas.viviendas, orden);
  const q = normalizar(busqueda.trim());
  const filtradas = ordenadas.filter((v) =>
    [v.municipio, v.provincia, v.referencia].some((c) =>
      normalizar(c).includes(q),
    ),
  );

  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor">
        <SearchBar
          busqueda={busqueda}
          onBusqueda={setBusqueda}
          orden={orden}
          onOrden={setOrden}
          vista={vista}
          onVista={setVista}
          onLimpiar={limpiar}
          total={filtradas.length}
        />
        <DwellingList viviendas={filtradas} vista={vista} />
      </main>
      <Footer />
    </>
  );
}

export default App;
