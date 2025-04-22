import React, { useState } from "react";
import { Box, IconButton, Slider, Typography } from "@mui/material";

import PlayIcon from "../../assets/Play.svg";

import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import SkipPreviousRounded from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRounded from "@mui/icons-material/SkipNextRounded";
import ShuffleRounded from "@mui/icons-material/ShuffleRounded";
import RepeatRounded from "@mui/icons-material/RepeatRounded";

const Player = ({ currentPlayedSong, setCurrentPlayedSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const currentSong = {
    title: "One step Beyond",
    artist: "Madness",
    duration: 138,
    currentTime: 0,
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: { xs: "80px", md: "90px" },

        width: "100%",
        backgroundColor: "#282828",
        borderTop: "1px solid #282828",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "10px 16px", md: "10px 16px" },
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
        <Box
          component="img"
          src={
            currentPlayedSong?.image
              ? currentPlayedSong.image
              : "https://i.scdn.co/image/ab6761610000517429ed73e6f316794abb4748eb"
          }
          alt="album cover"
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: 14,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {currentPlayedSong?.subtitle
              ? currentPlayedSong.subtitle
              : currentSong.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#b3b3b3", fontSize: 12 }}>
            {currentPlayedSong?.title
              ? currentPlayedSong.title
              : currentSong.artist}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "center" },
          width: { xs: "60%", md: "40%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "#b3b3b3", padding: "8px" }}>
            <SkipPreviousRounded sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            sx={{
              color: "#fff",
              backgroundColor: "",
              border: "1px solid #888",
              width: 32,
              height: 32,
              margin: "0 8px",
              "&:hover": { backgroundColor: "#222" },
            }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseRounded sx={{ color: "#888" }} />
            ) : (
              <PlayArrowRounded sx={{ color: "#888" }} />
            )}
          </IconButton>
          <IconButton sx={{ color: "#b3b3b3", padding: "8px" }}>
            <SkipNextRounded sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#b3b3b3",
              fontSize: 11,
              marginRight: 1,
              minWidth: "30px",
              textAlign: "right",
            }}
          >
            {formatTime(currentTime)}
          </Typography>
          <Slider
            size="small"
            value={currentTime}
            max={currentSong.duration}
            onChange={(_, value) => setCurrentTime(value)}
            sx={{
              color: "#fff",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                display: "none",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "none",
                },
              },
              "&:hover .MuiSlider-thumb": {
                display: "block",
              },
            }}
          />
          <Typography
            sx={{
              color: "#b3b3b3",
              fontSize: 11,
              marginLeft: 1,
              minWidth: "30px",
            }}
          >
            {formatTime(currentSong.duration)}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: { md: "30%" },

          justifyContent: "flex-end",
          display: { xs: "none", md: "flex" },
        }}
      ></Box>
    </Box>
  );
};

export default Player;
