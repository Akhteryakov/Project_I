import { render, screen } from "@testing-library/react";
import { AppButton, AppButtonVariant } from "shared/ui/AppButton/AppButton";

describe("AppButton", () => {
  test("Test render", () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Test clear variant", () => {
    render(<AppButton variant={AppButtonVariant.CLEAR}>Test</AppButton>);
    expect(screen.getByText("Test")).toHaveClass("clear");
    screen.debug(); // выведет разметку
  });
});
