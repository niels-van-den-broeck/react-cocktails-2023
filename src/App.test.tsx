import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    expect(screen.getByText("CocktailApi")).toBeVisible();
    expect(screen.getByText("Cocktails in React")).toBeVisible();

    expect(screen.getByLabelText("Search by:")).toBeVisible();
    expect(screen.getByLabelText("SearchTerm:")).toBeVisible();

    expect(screen.getByText("I'm feeling thirsty!")).toBeVisible();
  });
});
