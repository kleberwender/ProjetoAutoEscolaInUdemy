/* import React from "react";
import { render, screen, fireEvent } from "../../test-utils";
import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({id: i, title: ` Title ${i}`})
  }
  return result;
}

describe.each([[1, 1], [2, 2], [3, 3], [4, 3], [6, 3],])
("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    render(<ProductGrid product={buildProducts(size)}/>);
    expect(screen.getAllByRole("heading", {level:6}).length).toBe(showOnly);
  });

  test("show all the products when button is clicked" , async () => {
    render(<ProductGrid product={buildProducts(size)}/>);
    await fireEvent.click(screen.getByRole("lista completa de serviços"));

    expect(screen.getAllByRole("heading",{level:6}).length).toBe(size);
  });
}); */

import React from "react";
import { render, screen, fireEvent } from "../../test-utils";
import ProductGrid from "./ProductGrid";

const products = [
  { id: 1, title: "Product 1", image: "/product1.jpg", summary: "Summary 1" },
  { id: 2, title: "Product 2", image: "/product2.jpg", summary: "Summary 2" },
  { id: 3, title: "Product 3", image: "/product3.jpg", summary: "Summary 3" },
  { id: 4, title: "Product 4", image: "/product4.jpg", summary: "Summary 4" },
  { id: 5, title: "Product 5", image: "/product5.jpg", summary: "Summary 5" },
  { id: 6, title: "Product 6", image: "/product6.jpg", summary: "Summary 6" },
];

describe("ProductGrid", () => {
  test("renders correctly with initial products", () => {
    render(<ProductGrid products={products} />);
    const productCards = screen.getAllByRole("article");
    expect(productCards).toHaveLength(3); // Verifica se apenas 3 produtos são exibidos inicialmente
  });

  test("shows all products when 'Lista completa de serviços' button is clicked", () => {
    render(<ProductGrid products={products} />);
    fireEvent.click(screen.getByText("Lista completa de serviços"));
    const productCards = screen.getAllByRole("article");
    expect(productCards).toHaveLength(products.length); // Verifica se todos os produtos são exibidos após clicar no botão
  });
});

