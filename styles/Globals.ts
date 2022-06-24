import { styled, theme, globalCss, css } from "../stitches.config";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, fontFamily: "arial" },
});

export const Container = styled("div", {
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: "1rem",
  padding: "1rem",
  transition: "box-shadow 0.2s",
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

export const Table = styled("table", {
  border: "2px solid black",
  margin: "auto",
});

export const TD = styled("td", {
  padding: "0.4rem",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
});
