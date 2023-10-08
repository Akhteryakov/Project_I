import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/context";
import { AppLink, AppLinkVariant } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
    children: "Text",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const Inverted: Story = {
  args: {
    variant: AppLinkVariant.INVERTED,
  },
};

export const InvertedDark: Story = {
  args: {
    variant: AppLinkVariant.INVERTED,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
