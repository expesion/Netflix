import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading, Card, Player } from "../components";
import FooterContainer from "./footer";
import * as ROUTES from "../constants/routes";
function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [slideRows, setSlideRows] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (
      !localStorage.getItem(user.email) &&
      user.displayName &&
      user.photoURL
    ) {
      localStorage.setItem(
        user.email,
        JSON.stringify([
          { displayName: user.displayName, photoURL: +user.photoURL },
        ])
      );
      setUsers([{ displayName: user.displayName, photoURL: +user.photoURL }]);
    } else {
      const allUser = JSON.parse(localStorage.getItem(user.email));
      if (allUser) {
        setUsers([...allUser]);
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slides[category], {
      keys: ["data.description", "data.genre", "data.title"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line
  }, [searchTerm, category, slides]);

  const addUsers = (name, photoURL) => {
    const allUser = JSON.parse(localStorage.getItem(user.email));
    allUser.push({ displayName: name, photoURL: photoURL });
    localStorage.setItem(user.email, JSON.stringify(allUser));
    setUsers([...allUser]);
  };

  return profile.displayName ? (
    loading ? (
      <Loading src={profile.photoURL} />
    ) : (
      <>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo
                to={ROUTES.HOME}
                alt="netflix"
                src="images/logo.svg"
              />
              <Header.TextLink
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === "films" ? "true" : "false"}
                onClick={() => setCategory("films")}
              >
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={profile.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={profile.photoURL} />
                    <Header.TextLink>{profile.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                      Sign Out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>
              Watch Joker at your home now, with thaha, just kidding
            </Header.FeatureCallOut>
            <Header.Text>
              Arthur Fleck, a party clown, leads an impoverished life with his
              ailing mother. However, when society shuns him and brands him as a
              freak, he decides to embrace the life of crime and chaos.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
        <Loading.ReleaseBody />
        <Card>
          <Card.Group>
            {slideRows.map((item) => {
              return (
                <Card key={`${category}-${item.title.toLowerCase()}`}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Entities>
                    {item.data.map((slide) => {
                      return (
                        <Card.Item key={slide.docId} item={slide}>
                          <Card.Image
                            src={`/images/${category}/${slide.genre}/${slide.slug}/small.jpg`}
                          />
                          <Card.Meta>
                            <Card.SubTitle>{slide.title}</Card.SubTitle>
                            <Card.Text>{slide.description}</Card.Text>
                          </Card.Meta>
                        </Card.Item>
                      );
                    })}
                  </Card.Entities>
                  {
                    <Card.Feature category={category}>
                      <Player>
                        <Player.Button />
                        <Player.Video src="/videos/bunny.mp4" />
                      </Player>
                    </Card.Feature>
                  }
                </Card>
              );
            })}
          </Card.Group>
        </Card>
        <FooterContainer />
      </>
    )
  ) : user.displayName ? (
    <div>
      <SelectProfileContainer
        user={user}
        setProfile={setProfile}
        addUsers={addUsers}
        users={users}
      />
    </div>
  ) : null;
}

export default BrowseContainer;
