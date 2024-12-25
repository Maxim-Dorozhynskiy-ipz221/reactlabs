import { render, screen, fireEvent } from "@testing-library/react";
import SortableTable from "./SortableTable";

test("renders table with correct data", () => {
  render(<SortableTable />);
  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText("Jane")).toBeInTheDocument();
  expect(screen.getByText("Bob")).toBeInTheDocument();
});

test("sorts by name", () => {
  render(<SortableTable />);
  const nameHeader = screen.getByText("Name");
  fireEvent.click(nameHeader);  // Сортування по імені
  expect(screen.getByText("Bob")).toBeInTheDocument();
});

test("sorts by age", () => {
  render(<SortableTable />);
  const ageHeader = screen.getByText("Age");
  fireEvent.click(ageHeader);  // Сортування по віку
  expect(screen.getByText("Jane")).toBeInTheDocument();
});
