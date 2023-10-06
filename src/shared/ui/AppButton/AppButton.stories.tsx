import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "shared/ui/AppButton";
import { AppButtonVariant } from "./AppButton";

const meta = {
  // title: "shared/AppButton",
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
