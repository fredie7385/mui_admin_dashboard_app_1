import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import masound from "./../assets/avatars/masoud.jpeg";
import { Link } from "react-router-dom";


function SideNav() {
  const theme = useTheme();
  return (
    <Sidebar
      sx={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} alt="channels name" src={masound} />
        <Typography variant="body2" sx={styles.yourChannel}>
          Your Channel
        </Typography>
        <Typography variant="overline"> Masoud Hosseini</Typography>
      </Box>
      <Menu >
        <MenuItem
          component={<Link to={"/"} />}
          active
          icon={<DashboardOutlined />}
        >
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          component={<Link to={"/content"} />}
          active
          icon={<SourceOutlined />}
        >
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem
          component={<Link to={"/analytics"} />}
          active
          icon={<AnalyticsOutlined />}
        >
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem
          component={<Link to={"/customization"} />}
          active
          icon={<StyleOutlined />}
        >
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
    mb: 3,
    borderRadius: "10%",
  },
  yourChannel: {
    fontWeight: "bold",
    textTransform: "capitalize",
    mt: 1,
  },
};

export default SideNav;
