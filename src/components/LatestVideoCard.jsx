import { Box, Card, CardContent, Typography } from "@mui/material";
import thumbnail from "./../assets/thumbnail.png";
function LatestVideoCard(props) {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src={thumbnail}
          ></Box>
          <Typography sx={styles.latestVideoTitle}>
            ReactJS SearchBar tutorial
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.latestVideoTimeLabel}>
          {" "}
          First 6 hours:
        </Typography>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">200</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Watch Time</Typography>
          <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">3</Typography>
        </Box>
        <Typography variant="link" sx={styles.cardAction}>
          GO TO VIDEO ANALYTICS
        </Typography>
        <Typography variant="link" sx={styles.cardAction}>
          SEE COMMENTS
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LatestVideoCard;

// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative",
  },
  latestVideoThumbnail: {
    width: "100%",
    mt: 1,
    filter: "brightness(20%)",
    display: "block",
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    color: "neutral.light",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    mb: 2,
  },
  latestVideoTimeLabel:{
    color:'neutral.normal',
    mt:2
  },
  latestVideoStatsRow:{
    display:"flex",
    justifyContent: 'space-between',
    mt:2
  },
  cardAction:{
    mt:2
  }
};
