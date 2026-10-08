function Specs({ ascensor }) {
  const ascensorTexto = ascensor === false ? "Sin ascensor" : "Con ascensor";
  return <p>{ascensorTexto}</p>;
}

export default Specs;
