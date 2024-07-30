/* eslint-disable no-unused-vars */
import React from "react";
import { getUsersApi } from "./api/user";

function App() {
  async function getUsers() {
    try {
      const response = await getUsersApi();
      console.log(response);
    } catch (error) {
      console.error("Error...");
    }
  }

  return (
    <>
      <h1>React Jest - Actividad 1</h1>

      <p>Objetivo: Practicar los test unitarios</p>

      <button onClick={getUsers} data-testid="btnGetUsers">
        Obtener Usuarios
      </button>

      <p>Ejemplo Lista de Usuarios</p>
      <ul>
        <li>Esteban</li>
        <li>Julio</li>
        <li>Pedro</li>
      </ul>
    </>
  );
}

export default App;
