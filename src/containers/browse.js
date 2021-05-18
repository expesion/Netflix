import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";
function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      "Browse"
    )
  ) : (
    <div>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </div>
  );
}

export default BrowseContainer;
