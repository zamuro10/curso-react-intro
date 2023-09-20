import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  let message = null;

  if (completedTodos === totalTodos) {
    message = <p>Felicitaciones, has completado todas las tareas. ¡Sigue así!</p>;
  } else {
    message = (
      <h1>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    );
  }

  return <div className="TodoCounter">{message}</div>;
}

export { TodoCounter };
