import "./TodoSearch.css";
import React from "react";
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className="TodoSearchContainer"> {/* Contenedor para centrar */}
      <input
        placeholder="Buscar TODO..."
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
