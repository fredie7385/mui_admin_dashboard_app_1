import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./config/Theme";
import { SideNav, AppHeader } from "./components/Components";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* The rest of your application */}
        <CssBaseline />
        <AppHeader />
        <Box sx={styles.container}>
          <SideNav />
          <Box component={"main"} sx={styles.mainSection}></Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  container: {
    bgcolor: "neutral.light",
    display: "flex",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
