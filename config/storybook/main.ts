import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "storybook-react-i18next",
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;
