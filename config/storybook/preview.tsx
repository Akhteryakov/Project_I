// import React from "react";
import type { Preview } from "@storybook/react";
// import { ThemeProvider } from "../../src/shared/context";
import "app/styles/index.scss";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/,
    //   },
    // },
  },
  decorators: [],
};

export default preview;
