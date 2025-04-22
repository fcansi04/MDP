import React from "react";
import { Box, Typography } from "@mui/material";
import PlayIcon from "../assets/Play.svg";
import { useState } from "react";
const Card = ({ option, currentPlayedSong, setCurrentPlayedSong }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {option?.map((item) => {
        return (
          <Box
            key={item.title}
            onClick={() => setCurrentPlayedSong(item)}
            sx={{
              bgcolor: "#2A2A2A",
              height: {
                xs: "170px",
                xsm: "190px",
                xsl: "210px",
                md: "230px",
                lm: "243px",
                xl: "273px",
              },
              width: {
                xs: "120px",
                xsm: "140px",
                xsl: "160px",
                md: "180px",
                lm: "193px",
                xl: "203px",
              },
              borderRadius: "10px",
              padding: "16px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              position: "relative",
              transition: "all 0.3s ease-out",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#3A3A3A",
                boxShadow: "0px 4px 10px rgba(2, 2, 2, 0.9)",
              },
              "&:hover .play-icon": {
                opacity: 1,
              },
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "70%",
              }}
              src={
                item.image == "https://example.com/gelty.jpg"
                  ? "https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ"
                  : item.image
              }
              alt="user-profile"
            />
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#fff",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.subtitle ? item.subtitle : item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "12px" },
                  color: "#888",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.description}
              </Typography>
            </Box>
            <Box
              className="play-icon"
              sx={{
                position: "absolute",
                bottom: { xs: 62, xsm: 66, xsl: 72, md: 78, lm: 84, xl: 92 },
                right: { xs: 19, xsm: 20, xsl: 21, md: 21, lm: 22, xl: 22 },
                bgcolor: "#66D36E",
                width: { xs: "30px", md: "40px" },
                height: { xs: "30px", md: "40px" },
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#55C45F",
                },
              }}
            >
              <Box component="img" src={PlayIcon} alt="play" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Card;
