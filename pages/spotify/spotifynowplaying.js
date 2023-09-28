import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getNowPlayingItem from "./spotifyapi";
import SpotifyLogo from "./spotifylogo";
import PlayingAnimation from "./spotifyanimation";

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <>
    </>
  )
};
export default SpotifyNowPlaying;
