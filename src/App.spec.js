/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import { render, fireEvent } from "@testing-library/react";
import { getUsersApi } from "./api/user";
import App from "./App";

jest.mock("./api/user/user.js", () => ({
  getUsersApi: jest.fn(),
}));

describe("App", () => {
  it("Should render title screen", () => {
    const sut = render(<App />);
    const titleElement = sut.getByText("React Jest - Actividad 1");

    expect(titleElement).toBeInTheDocument();
  });

  it("Should render 3 users", () => {
    const sut = render(<App />);
    const listitems = sut.getAllByRole("listitem");

    expect(listitems).toHaveLength(3);
  });

  it("Should get users correctly", () => {
    const sut = render(<App />);
    const btnGetUsers = sut.getByTestId("btnGetUsers");
    fireEvent.click(btnGetUsers);

    expect(getUsersApi).toHaveBeenCalled();
  });
});
