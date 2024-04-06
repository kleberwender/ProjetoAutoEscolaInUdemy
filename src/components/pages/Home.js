import React from 'react';
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from "react-icons/fa";
import Hero from '../molecules/Hero';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Feature from '../atoms/Feature';
import Grid from '../atoms/Grid';
import Section from '../molecules/Section';
import Footer from '../organisms/Footer';
import ProductGrid from '../organisms/ProductGrid';
import Accordion, {AccordionGroup} from '../atoms/Accordion';

/* Importação das imagens e vídeos */
import bgwayTwo from '../../assets/way-two.jpg';
import AbountVideo from '../../assets/aboutVideo.mp4'
import OneHabilitCarAndMoto from '../../assets/carAndMoto.jpg';
import OneHabilitiCar from '../../assets/1HabilitaçãoCarro.jpg';
import OneHabilitMoto from '../../assets/1habilitacaoMoto.jpg';
import MudancaGategoria from '../../assets/MudancaCatCaminhao.jpg';
import AulasAvulsas from '../../assets/aulasAvulsas.jpg';

const products = [
  {id: 1, title: "1º Habilitação Carro e Moto",  image: OneHabilitCarAndMoto,},
  {id: 2, title: "1º Habilitação Carro",         image: OneHabilitiCar,},
  {id: 3, title: "1º Habilitação Moto",          image: OneHabilitMoto,},
  {id: 4, title: "Mudança de categoria carreta", image: MudancaGategoria,},
  {id: 5, title: "aulas avulsas",                image: AulasAvulsas,},
];

const Home = () => (
  <>
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
    <Section>
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
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Kleber Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit voluptatibus, provident est harum odio atque deserunt quas repellat recusandae itaque deleniti modi tenetur? Repudiandae tempore laudantium odio nesciunt atque?
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AbountVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo a minha CNH?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer /> 
  </>
);
export default Home;