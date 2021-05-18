import React, { useContext } from "react";
import SelectProfileContainer from "./profile";
function BrowseContainer({ slides, user }) {
  return (
    <div>
      <SelectProfileContainer user={user} />
    </div>
  );
}

export default BrowseContainer;
