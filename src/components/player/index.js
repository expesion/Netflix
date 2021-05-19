import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Inner, Close, Overlay } from "./style/player";

const PlayerContext = createContext();
function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}
Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          onClick={({ target }) => {
            if (target.id === "netlix-player") return;
            setShowPlayer(false);
          }}
        >
          <Inner>
            <video id="netlix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
          <Close />
        </Overlay>,
        document.body
      )
    : null;
};
Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      {...restProps}
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
    >
      Play
    </Button>
  );
};
export default Player;
