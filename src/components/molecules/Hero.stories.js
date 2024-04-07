import React from 'react';
import Hero from "./Hero";
import bgwayTwo from "../../stories/asset/way-two.jpg";
import Heading  from "../atoms/Heading";
import Button from "../atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
  tags: ['autodocs'],
};

export const Usage =  () => (
  <Hero image={bgwayTwo}>
    <Heading>
      <h1>
         {("Title", "Ganhe a liberdade")}
        {/* Ganhe sua <strong>liberdade</strong><br/> de ir e vir */}
      </h1>
    </Heading>
    <p>
      {("Text", "A auto escola que mais aprova")}
      {/* A auto escola lider em aprovação */}
    </p>
  </Hero>
);

export const WhitList = () => (
  <Hero image={bgwayTwo}>
    <Heading>
    <h1>
      Ganhe sua <strong>liberdade</strong><br/>de ir e vir 
    </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <Button color="primary" variant="outlined">Matricule-se agora</Button>
  </Hero>
);