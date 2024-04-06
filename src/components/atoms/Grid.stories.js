import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
  tags: [
    'autodocs'
  ],
};

const Box = styled.div`
  height: 200px;
  background-color: indigo;
`;

export const usage = () => (
 <Grid sm={2} md={4} lg={4} xl={5}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
 </Grid>
);