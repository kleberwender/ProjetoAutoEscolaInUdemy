import React from "react";
import { FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from "../atoms/Container";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`;

const FooterLinks = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }
  
  &::before{
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0; 
    height: 2px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary.dark}; 
    transition: width 0.4s ease; 
    }

  &:hover::before {
    color: ${props => props.theme.colors.primary.dark};
    width: 100%;
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Kleber Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            perferendis saepe ut harum numquam hic porro reiciendis ducimus,
            dolore distinctio. Non numquam nobis quaerat quae modi perspiciatis
            facere mollitia consequuntur.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (84) 9.9876-5432
          </p>
          <p>
          <IconContainer>
            <FaBuilding />
          </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            perferendis saepe ut harum numquam hic porro reiciendis ducimus,
            dolore distinctio.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLinks 
              rel="noopener" target="_blank" href="https://www.facebook.com/?locale=pt_BR"
              >
            <IconContainer>
              <FaFacebookF/>
            </IconContainer>
            Facebook
            </FooterLinks>
          </p>
          <p>
            <FooterLinks 
              rel="noopener" target="_blank" href="https://www.linkedin.com/login/pt"
              >
            <IconContainer>
              <FaLinkedinIn />
            </IconContainer>
            Linkedln
            </FooterLinks>
          </p>
          <p>
            <FooterLinks 
              rel="noopener" target="_blank" href="https://www.instagram.com/"
            >
            <IconContainer>
              <FaInstagram />
            </IconContainer>
            Instagram
            </FooterLinks>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);
export default Footer;
