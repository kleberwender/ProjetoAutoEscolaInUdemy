import React from "react";
import { render, screen, fireEvent } from "../../../test-utils";

import AccordionGroup from "./AccordionGroup";
import Accordion from "./Accordion";

const title = "Accordion Title";

const renderGroup = (n) => {
  const accordions = [];

  for (let i = 0; i < n; i += 1){
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        child{i}
      </Accordion>
    );
  }
  return render(<AccordionGroup>{accordions}</AccordionGroup>);
};
test('renders with one children', () => {
 render(
 <AccordionGroup>
  <Accordion title={title}/>
 </AccordionGroup>);
 expect(screen.getByText(title)).toBeInTheDocument();
});

test("rendres with 3 children", () => {
  render(
    <AccordionGroup>
      <Accordion title={title}/>
      <Accordion title={title}/>
      <Accordion title={title}/>
    </AccordionGroup>
  );
  expect(screen.getAllByText(title)).toHaveLength(3);
});

test("renders with all accordions closed", () => {
  renderGroup(3);

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("opens accordion with click", async () => {
  renderGroup(5);

  await fireEvent.click(screen.getByText("Title 4"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument();
  expect(screen.getByText("Child 4")).toBeInTheDocument();
});


test("closes accordion when it clicks on it", async () => {
  renderGroup(3);

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.getByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});