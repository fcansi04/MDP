import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Player from "./components/Player";
import "./index.css";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [currentPlayedSong, setCurrentPlayedSong] = useState(null);
  const { fetchData, loading, error } = useFetch();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        paddingBottom: "90px", // Add padding to accommodate the fixed player at bottom
      }}
    >
      <Sidebar fetchData={fetchData} />
      <MainContent
        fetchData={fetchData}
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
      <Player
        currentPlayedSong={currentPlayedSong}
        setCurrentPlayedSong={setCurrentPlayedSong}
      />
    </Box>
  );
}

export default App;
