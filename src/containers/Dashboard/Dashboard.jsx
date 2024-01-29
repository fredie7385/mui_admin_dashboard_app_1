import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import masoud from "./../../assets/avatars/masoud.jpeg";
import ColorText from "../../components/ColorText";
import thumbnail from "./../../assets/thumbnail.png";
import studyIcon from "./../../assets/study-icon.png";
import thumbnail2 from "./../../assets/thumbnail2.png";
function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.dashboardContent}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src={masoud} />
              <Typography sx={styles.postMeta}> React with Masoud</Typography>
              <Typography sx={styles.postMeta}> Jan, 20, 2024</Typography>
            </Box>
            <Typography variant="body2">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio iusto nemo.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography variant="link" sx={styles.cardAction}>
              GO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>
        {/* general analytics section */}
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4,144</Typography>
            <Typography variant="h7">
              <ColorText color={"green.main"} />
              +46
              <ColorText color={"neutral.normal"} /> in the last 27 days
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"} /> Last 28 days
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7"> 235</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h7"> 235</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7"> $235</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top videos</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"} />
              Last 48 hours . views
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Become a Software Developer in 2024
              </Typography>
              <Typography variant="h7"> 35</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                CSS Grid tutorial: How to use grids to make awesome UI
              </Typography>
              <Typography variant="h7"> 23</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Call API&apos;s in React Native:Practical guide
              </Typography>
              <Typography variant="h7"> $200</Typography>
            </Box>
            <Typography variant="link" sx={styles.cardAction}>
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>
        {/* comments section */}
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle"> Latest Comments</Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Channel comments i haven&apos;t responded to{" "}
              </ColorText>
            </Typography>
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src={masoud} />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Fredrick
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ad quos molestiae ipsa?
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={thumbnail}
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src={masoud} />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Fredrick
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  how to deploy this ?
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={thumbnail}
              />
            </Box>
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src={masoud} />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Fredrick
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Thank you that was very helpful.
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={thumbnail}
              />
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              VIEW MORE...
            </Typography>
          </CardContent>
        </Card>
        {/* ideas section */}
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas Section for you</Typography>
              <Typography sx={styles.ideasQuestion}>
                Read to get business survey
              </Typography>
              <Typography variant="h7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                natus similique quisquam eaque est?
              </Typography>
              <Typography variant="link" sx={styles.cardAction}>
                GET STARTED NOW
              </Typography>
            </Box>
            <Box component={"img"} sx={styles.ideaImage} src={studyIcon} />
          </CardContent>
        </Card>
        {/* creator insiders section */}
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component={"img"}
                sx={styles.insiderImage}
                src={thumbnail2}
              />
              <Typography sx={styles.ideasQuestion}>
                Read to boost yur skills using AI tools
              </Typography>
              <Typography variant="h7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                explicabo nisi accusantium?
              </Typography>
              <Typography sx={styles.ideasQuestion} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;
// helps in vscode autocompletion for MUI
/**@type {import('@mui/material').SxProps } */
const styles = {
  pageTitle: {
    mb: 2,
  },
  dashboardContent: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  avatar: {
    width: "30px",
    height: "auto",
    mr: 1,
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },
  divider: {
    my: 2,
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
  },
  cardAction: {
    mt: 3,
  },
  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  videoThumbnail: {
    width: 80,
    ml: "auto",
  },
  ideaContent: {
    display: "flex",
  },
  ideasQuestion: {
    fontSize: 10,
    fontWeight: 500,
    my: 2,
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};
