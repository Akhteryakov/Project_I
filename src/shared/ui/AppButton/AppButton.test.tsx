import { render, screen } from "@testing-library/react";
import { AppButton } from "shared/ui/AppButton/AppButton";

describe("className", () => {
  test("btn test", () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
