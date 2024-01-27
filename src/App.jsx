import { ThemeProvider, Typography } from "@mui/material"
import React from "react"
import theme from "./config/Theme"


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
<Typography>
  hello
</Typography>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App