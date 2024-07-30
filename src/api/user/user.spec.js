/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { getUsersApi } from "./user";

const usersMock = [
  { id: 1, username: "esramru" },
  { id: 2, username: "aarias" },
];

describe("getUsersApi", () => {
  it("Shoul call correct function", () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(usersMock),
      });

    const response = getUsersApi();
    expect(response).resolves.toEqual(usersMock);
  });

  it("Should call error 404", () => {
    global.fetch = () =>
      Promise.resolve({
        status: 404,
        json: () => Promise.resolve(),
      });

    const response = getUsersApi();
    expect(response).rejects.toThrow(new Error("Peticion no encontrada"));
  });

  it("Should call error 500", () => {
    global.fetch = () =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve(),
      });

    const response = getUsersApi();
    expect(response).rejects.toThrow(new Error("Error en el servidor"));
  });
});
