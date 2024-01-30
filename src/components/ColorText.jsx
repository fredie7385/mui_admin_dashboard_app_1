import { Box } from "@mui/material";
import PropTypes from "prop-types";


function ColorText({ color, children }) {
  return (
    <Box sx={{ color: color }} component={"span"}>
      {children}
    </Box>
  );
}
ColorText.propTypes = {
  color: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default ColorText;
