import { styled } from "@kuma-ui/core";

export const Button = styled("button")`
  border: 10px solid ${({ color = "green" }) => color};

  color: ${({ color = "green" }) => color};
  padding: 1rem 2rem;
  border-radius: 100rem;
`;
