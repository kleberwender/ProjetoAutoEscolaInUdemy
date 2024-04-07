import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
  tags: ['autodocs'],
};

export const Usage = () => (
  <>
    <Accordion title="Como eu renovo a minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
  </>
);

export const WithGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo a minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae facilis expedita quas quam molestiae itaque labore ea dignissimos optio at, praesentium harum nisi cumque minus deleniti vero! Nulla!
    </Accordion>
  </AccordionGroup>
);