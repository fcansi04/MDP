import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
const PlayList = ({ fetchData }) => {
  const [playList, setPlayList] = useState(fetchData?.playlists);

  return (
    <Box
      sx={{
        flexDirection: "column",
        gap: "12px",
        alignSelf: "start",
        paddingX: "18px",
        color: "#888",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Typography fontWeight={400} letterSpacing={2} sx={{ fontSize: "12px" }}>
        ÇALMA LİSTELERİN
      </Typography>
      <SearchBar
        playList={playList}
        setPlayList={setPlayList}
        width={100}
        fetchData={fetchData}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {playList?.map((item) => {
          return (
            <Box
              key={item.title}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PlayList;
