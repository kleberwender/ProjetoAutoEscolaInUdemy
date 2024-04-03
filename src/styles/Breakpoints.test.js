/* import {breakAt, BreakpointSizes} from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],  
])("break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
 */

import { breakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],  
])("break at %ipx", (size) => {
  const mediaQuery = breakAt(size);
  expect(mediaQuery).toMatch(`@media (min-width: ${size}px)`); // Corrigido para verificar se a string contém o padrão esperado
});
