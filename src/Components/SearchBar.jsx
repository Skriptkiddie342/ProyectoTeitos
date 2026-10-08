import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function SearchBar({
  busqueda,
  onBusqueda,
  orden,
  onOrden,
  vista,
  onVista,
  onLimpiar,
  total,
}) {
  return (
    <div className="barra">
      <TextField
        type="search"
        size="small"
        label="Municipio, provincia o referencia"
        variant="outlined"
        value={busqueda}
        onChange={(e) => onBusqueda(e.target.value)}
        sx={{
          minWidth: 280,
          "& .MuiInputBase-root": {
            height: 31,
            fontSize: "0.8125rem",
            color: "#1976d2",
          },
          "& .MuiInputBase-input": { padding: "0 14px" },
          "& .MuiInputLabel-root": {
            color: "#1976d2",
            fontSize: "0.8125rem",
            transform: "translate(14px, 6px) scale(1)",
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "#1976d2" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#1976d2" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#42a5f5",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
          },
        }}
      />

      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel
          id="orden-label"
          sx={{
            color: "#1976d2",
            fontSize: "0.8125rem",
            "&.Mui-focused": { color: "#1976d2" },
          }}
        >
          Ordenar
        </InputLabel>
        <Select
          labelId="orden-label"
          id="orden-select"
          value={orden}
          label="Ordenar"
          onChange={(e) => onOrden(e.target.value)}
          sx={{
            height: 31,
            fontSize: "0.8125rem",
            color: "#1976d2",
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              height: "100%",
              minHeight: 0,
              py: 0,
            },
            "& .MuiSelect-icon": { color: "#1976d2" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#1976d2" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#42a5f5",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1976d2",
            },
          }}
        >
          <MenuItem value="ninguno">Sin ordenar</MenuItem>
          <MenuItem value="asc">Renta de menor a mayor</MenuItem>
          <MenuItem value="desc">Renta de mayor a menor</MenuItem>
        </Select>
      </FormControl>

      <Button
        size="small"
        variant={vista === "rejilla" ? "contained" : "outlined"}
        aria-pressed={vista === "rejilla"}
        onClick={() => onVista("rejilla")}
      >
        {vista === "rejilla" && "✓ "}Rejilla
      </Button>
      <Button
        size="small"
        variant={vista === "lista" ? "contained" : "outlined"}
        aria-pressed={vista === "lista"}
        onClick={() => onVista("lista")}
      >
        {vista === "lista" && "✓ "}Lista
      </Button>
      <Button size="small" variant="text" onClick={onLimpiar}>
        Limpiar
      </Button>

      <p className="contador">
        {total} {total === 1 ? "vivienda" : "viviendas"}
      </p>
    </div>
  );
}

export default SearchBar;
