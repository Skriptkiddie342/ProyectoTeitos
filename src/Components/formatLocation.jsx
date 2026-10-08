function formatLocation({ provincia, municipio }) {
  if (!provincia || municipio === provincia) return municipio ?? provincia;
  if (!municipio) return provincia;
  return `${municipio}, ${provincia}`;
}

export default formatLocation;
