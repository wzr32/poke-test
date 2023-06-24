import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./config/theme";

import "./styles/_globals.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Toaster
          position="top-right"
          // containerStyle={containerStyle}
          // toastOptions={toastOptions}
        />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
