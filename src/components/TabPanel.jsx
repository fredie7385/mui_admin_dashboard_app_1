import { Box } from "@mui/material";
import PropTypes from "prop-types";

function TabPanel({ children, value, index, mt = 4 }) {
  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && <Box sx={{ mt }}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
  index: PropTypes.number,
  mt: PropTypes.any,
};

export default TabPanel;
