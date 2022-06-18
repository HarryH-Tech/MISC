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
