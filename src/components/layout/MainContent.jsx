import { Box } from "@mui/material";
import MainContentHeader from "../MainContentHeader";
import RecentlyPlayed from "../RecentlyPlayed";
import Recommended from "../Recommended";
import { useState } from "react";
const MainContent = ({
  fetchData,
  currentPlayedSong,
  setCurrentPlayedSong,
}) => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(
    fetchData?.recently_played
  );
  const [recommended, setRecommended] = useState(fetchData?.recommended);

  return (
    <Box
      sx={{
        background: "linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        flex: 1,
        padding: { xs: "16px", md: "24px" },
        marginLeft: { xs: "60px", md: "224px" },
        minHeight: "100vh",
      }}
    >
      <MainContentHeader
        fetchData={fetchData}
        recentlyPlayed={recentlyPlayed}
        recommended={recommended}
        setRecentlyPlayed={setRecentlyPlayed}
        setRecommended={setRecommended}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
      <RecentlyPlayed
        option={recentlyPlayed}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
      <Recommended
        option={recommended}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
    </Box>
  );
};

export default MainContent;
