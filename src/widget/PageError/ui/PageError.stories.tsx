import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/context";
import "app/styles/index.scss";
import { PageError } from "./PageError";

const meta = {
  title: "widget/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
