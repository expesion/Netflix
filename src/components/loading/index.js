import React from "react";
import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";
function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

export default Loading;
