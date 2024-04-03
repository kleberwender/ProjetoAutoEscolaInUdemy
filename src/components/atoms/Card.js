import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

//#region Card Body
const StyleBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;
export const CardBody = ({ children }) => <StyleBody>{children}</StyleBody>;
CardBody.defaultProps = {
  children: undefined,
};
CardBody.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region Card Media
const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.1);
  }
`;
export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};
CardMedia.propTypes = {
  image: PropTypes.string,
};
//#endregion

//#region Card
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 14px;
  overflow: hidden;

`;
const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
Card.defaultProps = {
  children: undefined,
};
Card.propTypes = {
  children: PropTypes.node,
};
export default Card;
//#endregion
