import {
  Logout,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import sample_logo from "./../assets/sample-logo.png";
function AppHeader() {
  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton onClick={() => console.log("clicked")} color="secondary">
          <MenuTwoTone />
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src={sample_logo}
          alt="Sample Logo"
        />
        <Box sx={{flexGrow:1}}/>
        <IconButton title="Notifications" color="secondary">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <Settings />
        </IconButton>
        <IconButton title="Log out" color="secondary">
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    marginLeft: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
