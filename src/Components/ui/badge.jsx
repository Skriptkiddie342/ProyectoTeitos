function badge({ accesibilidad }) {
  const ROTULO_ACCESIBILIDAD = {
    adaptada: "Accesible",
    sin_adaptar: "No accesible",
  };

  const accesibilidadTexto =
    accesibilidad == null
      ? "Accesibilidad: sin datos"
      : `Accesibilidad: ${ROTULO_ACCESIBILIDAD[accesibilidad]}`;
}

export default badge;
