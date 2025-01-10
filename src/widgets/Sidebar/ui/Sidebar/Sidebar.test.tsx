import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { MemoryRouter } from "react-router";

describe("Sidebar", () => {
  test("With only first param", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("test toggle", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
