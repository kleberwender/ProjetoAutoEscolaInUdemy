import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import PlaceholderImage from "../../stories/asset/carAndMoto.jpg"
import Section from "../molecules/Section";
import Heading from './Heading';
import Button from './Button';

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subComponentes: {CardBody, CardMedia},
  parameters: {
    layout: 'centered',
  },

  tags: [
    'autodocs'
  ],
};

export const usage = () => (
 <Section inverse>
   <Card>
    <CardBody>
    <Heading>
      <h6>Título</h6>
    </Heading>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div>
      <Button color="primary" variant="link">Saiba Mais</Button>
    </div>
      </CardBody>
   </Card>
 </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage}/>
    <CardBody>
      <Heading>
        <h6>Título</h6>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div>
        <Button color="primary" variant="link">Saiba Mais</Button>
      </div>
      </CardBody>
    </Card>
  </Section>

);