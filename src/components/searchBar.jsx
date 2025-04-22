import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import searchIcon from "../assets/Search-Big.svg";
import groupIcon from "../assets/Group.svg";
import { IconButton } from "@mui/material";
export default function SearchBar({
  width,
  recentlyPlayed,
  recommended,
  setRecentlyPlayed,
  setRecommended,
  fetchData,
  playList,
  setPlayList,
  header,
}) {
  const recentlyPlayedFunc = (e) => {
    e.target.value == "" ? setRecentlyPlayed(fetchData?.recently_played) : "";
  };
  const recommendedFunc = (e) => {
    e.target.value == "" ? setRecommended(fetchData?.recommended) : "";
  };
  const playListFunc = (e) => {
    e.target.value == "" ? setPlayList(fetchData?.playlists) : "";
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: header ? { xs: "200px", md: "265px" } : `${width}%`,
        height: "34px",
        bgcolor: "#222",
        borderRadius: "100px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <img src={searchIcon} alt="searchIcon" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Ara"
        inputProps={{ "aria-label": "Ara" }}
        onChange={(e) => {
          e.preventDefault();

          if (recentlyPlayed && setRecentlyPlayed) {
            setRecentlyPlayed(
              recentlyPlayed.filter((item) =>
                item.subtitle
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
            recentlyPlayedFunc(e);
          }

          if (playList && setPlayList) {
            setPlayList(
              playList.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
            playListFunc(e);
          }

          if (recommended && setRecommended) {
            setRecommended(
              recommended.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
            recommendedFunc(e);
          }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", display: header ? "none" : "" }}
        aria-label="search"
        s
      >
        <img src={groupIcon} alt="groupIcon" />
      </IconButton>
    </Paper>
  );
}
