import { styled, theme } from "../stitches.config";

export const HeaderContainer = styled("div", {
  display: "flex",
  backgroundColor: theme.colors.primary,
  height: "15vh",
  color: "white",
  fontWeight: "bold",
  textDecoration: "underline",
  justifyContent: "center",
  alignItems: "center",
});

export const HeaderLinksContainer = styled("div", {
  gap: "1.4rem",
  display: "flex",
  backgroundColor: theme.colors.primary,
  color: "white",
  fontWeight: "bold",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "0.6rem",
});
