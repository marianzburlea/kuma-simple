// React server components are async so you make database or API calls.

import { styled } from "@kuma-ui/core";
import { Button } from "./button";

const H1 = styled("h1")`
  border: 2px solid red;
`;

export async function HelloServer() {
  return (
    <div>
      <H1>Hello Server</H1>
      <Button>click me</Button>
    </div>
  );
}
