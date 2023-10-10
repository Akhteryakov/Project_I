import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "shared/ui/AppButton";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/context";
import { AppButtonSize, AppButtonVariant } from "./AppButton";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
  args: {
    children: "Text",
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    variant: AppButtonVariant.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
    size: AppButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
    size: AppButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
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

export const Background: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND_INVERTED,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.XL,
  },
};
