import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./config/Theme";
import { SideNav, AppHeader } from "./components/Components";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './router/AppRoutes.jsx';
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* The rest of your application */}
        <CssBaseline />
        <AppHeader />
        <Box sx={styles.container}>
          {/* helps in adding routers in the app */}
          <BrowserRouter>
            <SideNav />
            <Box component={"main"} sx={styles.mainSection}>
              <AppRoutes/>
            </Box>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  container: {
    bgcolor: "neutral.medium",
    display: "flex",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 3,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
