import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
// For the Playlist Card element
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
//
import "./VideoPlayer.css";
function VideoPlayer() {
  const location = useLocation();
  const myProp = location.state && location.state.myProp;
  console.log(myProp);
  const [videoUrl, setVideoUrl] = useState(myProp.VideoList[0].url);
  // function to handle Watch now click
  const handleWatch = (Url) => {
    // Toggle the value of 'watched' when the button is clicked
    // setWatched(!watched);
    setVideoUrl(Url);
    console.log(videoUrl);
  };
  return (
    <div>
      <div className="Player">
        <ReactPlayer
          url={videoUrl}
          controls={true}
        />
      </div>
      <div className="playlist">
        <div className="playlist-bar">
          <h3>Video Playlist</h3>
          <ul className="video-playlist-ul">
            {myProp.VideoList.map((video, index) => (
              <Card sx={{ width: 320, margin: 2 }}>
                <div>
                  <Typography level="title-lg">{video.title}</Typography>
                  <Typography level="body-sm">
                    April 24 to May 02, 2021
                  </Typography>
                  <IconButton
                    aria-label="bookmark video"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{
                      position: "absolute",
                      top: "0.875rem",
                      right: "0.5rem",
                    }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </div>
                <AspectRatio
                  minHeight="120px"
                  maxHeight="200px"
                >
                  <img
                    src={myProp.thumbnail}
                    srcSet={myProp.thumbnail}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <CardContent orientation="horizontal">
                  <div>
                    <Typography level="body-xs">Video : </Typography>
                    <Typography
                      fontSize="lg"
                      fontWeight="lg"
                    >
                      {index + 1}
                    </Typography>
                  </div>
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                    onClick={() => handleWatch(video.url)}
                  >
                    Watch
                  </Button>
                </CardContent>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
