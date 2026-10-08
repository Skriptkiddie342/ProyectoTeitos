import formatLocation from "./formatLocation.jsx";
import Specs from "./ui/Specs.jsx";
import Rent from "./ui/Rent.jsx";
import badge from "./ui/badge.jsx";

function DwellingCard({ vivienda, variante = "rejilla" }) {
  const {
    adjudicada,
    referencia,
    provincia,
    municipio,
    tipologia,
    superficie,
    planta,
    ascensor,
    accesibilidad,
    renta,
  } = vivienda;

  function Card({ children }) {
    return <article className="tarjeta">{children}</article>;
  }

  return (
    <div className={`Data ${variante}`}>
      <p>{adjudicada ? "Adjudicada" : "Disponible"}</p>
      <p>{referencia}</p>
      <p>{formatLocation({ provincia, municipio })}</p>
      <p>Tipologia:{tipologia}</p>
      <p>Superficie: {superficie} m²</p>
      <p>Planta: {planta}</p>
      <Specs ascensor={ascensor} />
      <badge accesibilidad={accesibilidad} />
      <Rent renta={renta} />
    </div>
  );
}

export default DwellingCard;
