import React from "react";
import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/shared/context/theme-context/ThemeContext";
import "../../src/app/styles/index.scss";
import i18n from "./i18next";

const preview: Preview = {
  globals: {
    locale: "ru",
    locales: {
      en: "English",
      ru: "Русский",
    },
  },
  parameters: {
    i18n,
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
      <RouterDecorator>
        <ThemeDecorator theme={Theme.LIGHT}>
          <StyleDecorator>
            <Story />
          </StyleDecorator>
        </ThemeDecorator>
      </RouterDecorator>
    ),

    // @ts-ignore
    // (Story) => ThemeDecorator(Theme.LIGHT)(Story),
  ],
};

export default preview;
