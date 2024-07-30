/* eslint-disable no-useless-catch */
export async function getUsersApi() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const result = await response.json();

    if (response.status === 404) throw new Error("Peticion no encontrada");
    if (response.status === 500) throw new Error("Error en el servidor");
    if (response.status !== 200) throw result;

    return result;
  } catch (error) {
    throw error;
  }
}
