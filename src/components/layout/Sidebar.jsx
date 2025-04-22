import { Box, Typography, useMediaQuery } from "@mui/material";
import homeIcon from "../../assets/Home.svg";
import homeFilledIcon from "../../assets/Home-filled.svg";

import searchIcon from "../../assets/Search-small.svg";
import searchBigIcon from "../../assets/Search-Big.svg";

import libraryIcon from "../../assets/Library-small.svg";
import libraryBigIcon from "../../assets/Library-Big.svg";

import spotifyLogo from "../../assets/spotifyLogo.svg";
import spotifyLogoSmall from "../../assets/Spotify-logo-icon.svg";

import { Margin } from "@mui/icons-material";
import { useState } from "react";
import PlayList from "../PlayList";
const Sidebar = ({ fetchData }) => {
  const [isHome, setIsHome] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isLibrary, setIsLibrary] = useState(false);

  const xsm = useMediaQuery("(min-width: 400px)");
  const xsl = useMediaQuery("(min-width: 500px)");
  const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 925px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  const xl = useMediaQuery("(min-width: 1536px)");

  return (
    <Box
      sx={{
        width: { xs: "60px", md: "224px" },
        bgcolor: "#030303",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "26px",
        gap: "74px",
        position: "fixed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "30px",
        }}
      >
        <Box
          component="img"
          src={md ? spotifyLogo : spotifyLogoSmall}
          alt="spotify"
          sx={{
            width: { xs: "44px", md: "148px" },
            height: "44px",
            marginLeft: { xs: "8px", md: "20px" },
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            justifyItems: "start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            onClick={() => {
              setIsHome(true);
              setIsLibrary(false);
              setIsSearch(false);
            }}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: "14px",
              height: "40px",
              paddingLeft: "18px",
              alignItems: "center",
              borderLeft: isHome ? "3px solid #66D36E" : "3px solid #030303",
            }}
          >
            <img src={isHome ? homeFilledIcon : homeIcon} alt="home" />

            <Typography
              sx={{
                fontSize: "14px",
                display: { xs: "none", md: "block" },
                color: isHome ? "#fff" : "#888",
              }}
            >
              Giriş
            </Typography>
          </Box>
          <Box
            onClick={() => {
              setIsSearch(true);
              setIsHome(false);
              setIsLibrary(false);
            }}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: "14px",
              height: "40px",
              paddingLeft: "18px",
              alignItems: "center",

              borderLeft: isSearch ? "3px solid #66D36E" : "3px solid #030303",
            }}
          >
            <img
              src={isSearch ? searchBigIcon : searchIcon}
              alt="search-icon"
            />

            <Typography
              sx={{
                fontSize: "14px",
                color: isSearch ? "#fff" : "#888",
                display: { xs: "none", md: "block" },
              }}
            >
              Gözat
            </Typography>
          </Box>
          <Box
            onClick={() => {
              setIsLibrary(true);
              setIsHome(false);
              setIsSearch(false);
            }}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: "14px",
              height: "40px",
              paddingLeft: "18px",
              alignItems: "center",

              borderLeft: isLibrary ? "3px solid #66D36E" : "3px solid #030303",
            }}
          >
            <img
              src={isLibrary ? libraryBigIcon : libraryIcon}
              alt="search-icon"
            />

            <Typography
              sx={{
                fontSize: "14px",
                color: isLibrary ? "#fff" : "#888",
                display: { xs: "none", md: "block" },
              }}
            >
              Kitaplık
            </Typography>
          </Box>
        </Box>
      </Box>

      <PlayList fetchData={fetchData} />
    </Box>
  );
};

export default Sidebar;
