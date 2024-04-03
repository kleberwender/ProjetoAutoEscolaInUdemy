import React from "react";
import Home from "./Home";

export default {
  title: "Components/Pages/Home",
  component: Home,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const usage = () => (
 <Home />
);