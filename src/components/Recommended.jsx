import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "./Card";
const Recommended = ({ option, currentPlayedSong, setCurrentPlayedSong }) => {
  return (
    <Box
      sx={{
        flexDirection: "column",
        gap: "20px",
        display: option?.length > 0 ? "flex" : "none",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "28px", color: "#fff" }}>
          Tavsiye Edilenler
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#888" }}>
          Sevdiğin her şeyden biraz dinle.
        </Typography>
      </Box>
      <Card
        option={option}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
    </Box>
  );
};

export default Recommended;
