import { createTheme } from "@mui/material";
import { RED_POKEDEX_COLOR } from ".";

export const customTheme = createTheme({
  palette: {
    primary: {
      light: RED_POKEDEX_COLOR,
      dark: RED_POKEDEX_COLOR,
      main: RED_POKEDEX_COLOR,
    },
  },
});
