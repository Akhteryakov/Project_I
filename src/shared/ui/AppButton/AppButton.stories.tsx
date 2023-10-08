import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "shared/ui/AppButton";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/context";
import { AppButtonVariant } from "./AppButton";
import "app/styles/index.scss";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    ...Primary.args,
    variant: AppButtonVariant.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: AppButtonVariant.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    ...Primary.args,
    variant: AppButtonVariant.OUTLINE,
  },

  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};