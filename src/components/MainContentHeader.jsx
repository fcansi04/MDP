import { Height } from "@mui/icons-material";
import { bgcolor } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import ChevronLeft from "../assets/Chevron-left.svg";
import ChevronRight from "../assets/Chevron-right.svg";
import SearchBar from "./searchBar";
import RecentlyPlayed from "./RecentlyPlayed";
const MainContentHeader = ({
  fetchData,
  recentlyPlayed,
  recommended,
  setRecentlyPlayed,
  setRecommended,
}) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "23px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              component="img"
              sx={{
                bgcolor: "#000",
                padding: "6px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              src={ChevronLeft}
              alt="chevron-left"
            />
            <Box
              component="img"
              sx={{
                bgcolor: "#000",
                padding: "6px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              src={ChevronRight}
              alt="chevron-right"
            />
          </Box>
          <SearchBar
            recentlyPlayed={recentlyPlayed}
            recommended={recommended}
            setRecentlyPlayed={setRecentlyPlayed}
            setRecommended={setRecommended}
            fetchData={fetchData}
            header={true}
          />
        </Box>
        <Box
          sx={{
            height: "35px",
            width: { xs: "35px", md: "203px" },
            bgcolor: "#222",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            padding: { xs: "5px 5px", md: "0 10px" },
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "100%",
            }}
            src={fetchData?.user?.profile_picture}
            alt="user-profile"
          />
          <Box sx={{ width: "139px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#888",
                display: { xs: "none", md: "block" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {fetchData?.user?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContentHeader;
