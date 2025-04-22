import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "./Card";
const RecentlyPlayed = ({
  option,
  currentPlayedSong,
  setCurrentPlayedSong,
}) => {
  console.log(option);
  return (
    <Box
      sx={{
        flexDirection: "column",
        gap: "20px",
        display: option?.length > 0 ? "flex" : "none",
      }}
    >
      <Typography sx={{ fontSize: "28px", color: "#fff" }}>
        Yakında Çalanlar
      </Typography>
      <Card
        option={option}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
    </Box>
  );
};

export default RecentlyPlayed;
