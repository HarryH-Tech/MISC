import { styled, theme, globalCss, css } from "../stitches.config";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, fontFamily: "arial" },
});

export const Container = styled("div", {
  border: `2px solid ${theme.colors.secondary}`,
  borderRadius: "1rem",
  padding: "1rem",
  "&:hover": {
    boxShadow: "2px 2px 2px black",
  },

  width: "50%",
  m: "2rem auto",
  ta: "center",
});

export const Button = styled("button", {
  borderRadius: "0.6rem",
  margin: "1rem",
  padding: "0.6rem",
  fontWeight: "bold",
  cursor: "pointer",
  backgroundImage: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",

  "&:hover": {
    boxShadow: "2px 2px 2px black",
  },

  "&:active": {
    transform: "translateY(0.2rem)",
  },
});
