import React from "react";
import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/shared/context/theme-context/ThemeContext";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.LIGHT}>
        <StyleDecorator>
          <Story />
        </StyleDecorator>
      </ThemeDecorator>
    ),

    // @ts-ignore
    // (Story) => ThemeDecorator(Theme.LIGHT)(Story),
  ],
};

export default preview;
