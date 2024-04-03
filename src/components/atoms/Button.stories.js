import React from 'react';
import { actions } from "@storybook/addon-actions";
import { fn } from '@storybook/test';
import Button from "./Button";
import styled from 'styled-components';

export default {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

  tags: [
    'autodocs'
  ],
  
};

const events = actions({onClick: fn()});

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
      <Toolbar> 
        <Button {...events}> Default </Button>
        <Button color="primary" {...events}> Primary </Button>
        <Button color="danger" {...events}> Danger </Button>

     </Toolbar>

    <p>Disabled:</p>
    <Toolbar> 
        <Button {...events} disabled> Default </Button>
        <Button color="primary" {...events} disabled> Primary </Button>
        <Button color="danger" {...events} disabled> Danger </Button>
    </Toolbar>
  </div>
); 

export const outlined = () => (
  <div>
    <p>Enabled:</p>
      <Toolbar> 
        <Button variant="outlined" {...events}> Default </Button>
        <Button variant="outlined" color="primary" {...events}> Primary </Button>
        <Button variant="outlined" color="danger" {...events}> Danger </Button>
     </Toolbar>

    <p>Disabled:</p>
    <Toolbar> 
        <Button variant="outlined" {...events} disabled> Default </Button>
        <Button variant="outlined" color="primary" {...events} disabled> Primary </Button>
        <Button variant="outlined" color="danger" {...events} disabled> Danger </Button>
    </Toolbar>
  </div>
);


export const link = () => (
  <div>
    <p>Enabled:</p>
      <Toolbar> 
        <Button variant="link" {...events}> Default </Button>
        <Button variant="link" color="primary" {...events}> Primary </Button>
        <Button variant="link" color="danger" {...events}> Danger </Button>
     </Toolbar>

    <p>Disabled:</p>
    <Toolbar> 
        <Button variant="link" {...events} disabled> Default </Button>
        <Button variant="link" color="primary" {...events} disabled> Primary </Button>
        <Button variant="link" color="danger" {...events} disabled> Danger </Button>
    </Toolbar>
  </div>
);