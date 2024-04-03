import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },

    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        //customViewports
      },
    },
  },
};
export default preview;

/** PROPRIEDADES  DOS TAMANHOS DE TELAS*/
const customViewports = {
  extraSmall: {
    name: "Portrail phone (Default)",
    style: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    style: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Table (md)",
    style: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    style: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    style: {
      width: "1280px",
      height: "800px",
    },
  },
};

/*Função para style global */
import React from "react";
import GlobalStyle from "../src/styles/GlobalStyle";
import  ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <ThemeProvider>
        {StoryFn()}
      </ThemeProvider>
    </>
  ),
];
