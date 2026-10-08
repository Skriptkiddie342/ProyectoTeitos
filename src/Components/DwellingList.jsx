import DwellingCard from "./DwellingCard.jsx";

function DwellingList({ viviendas, vista }) {
  if (viviendas.length === 0) {
    return <p>No hay viviendas que coincidan con tu búsqueda.</p>;
  }

  return (
    <div className="viviendas">
      {viviendas.map((vivienda) => (
        <DwellingCard key={vivienda.id} vivienda={vivienda} variante={vista} />
      ))}
    </div>
  );
}

export default DwellingList;
