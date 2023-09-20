import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../components/TodoContext";
import "../Index.css"


function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
