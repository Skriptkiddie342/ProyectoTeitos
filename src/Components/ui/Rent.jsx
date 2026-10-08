function Rent({ renta }) {
  const rentaTexto =
    renta != null ? `${renta.toLocaleString("es-ES")} €/mes` : "Sin renta";

  return <p>{rentaTexto}</p>;
}

export default Rent;
