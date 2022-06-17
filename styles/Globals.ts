import { styled } from "@stitches/react";

export const Container = styled("div", {
  border: "2px solid #ffaaff",
  borderRadius: "1rem",
  padding: "1rem",
  "&:hover": {
    boxShadow: "2px 2px 2px black",
  },
});
