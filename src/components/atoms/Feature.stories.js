import React from "react";
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from "react-icons/fa";
import Grid from "../../components/atoms/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,

  tags: [
    'autodocs'
  ],
};

export const Usage = () => (
 <Feature icon={<FaCar />} title="Título">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
 </Feature>
);

export const WithGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="Maior e melhor frota">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </Feature>
    <Feature icon={<FaKey />} title="Habilitação mais rápida">
      <p>
        Lorem ipsum dolor sit amet
      </p>
    </Feature>
    <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </Feature>
    <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </Feature>
  </Grid>
);