import React, { useState } from "react";
import { AddProfile as AP } from "../components";
function AddProfile({ addProfileToProfiles, photoURL }) {
  const [text, setText] = useState("");
  const addProfile = () => {
    addProfileToProfiles(text, photoURL);
  };
  return (
    <AP>
      <AP.Heading>Add Profile</AP.Heading>
      <AP.SubHeading>
        Add a profile for another person to watch Netflix.
      </AP.SubHeading>
      <AP.Section>
        <AP.Image src={photoURL} />
        <AP.Input
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </AP.Section>
      <AP.SubHeading>
        <AP.Button onClick={addProfile}>CONTINUE</AP.Button>
        <AP.Button>CANCEL</AP.Button>
      </AP.SubHeading>
    </AP>
  );
}

export default AddProfile;
