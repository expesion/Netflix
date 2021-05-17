import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [error, setError] = useState(null);
  const isInvalid = password === "" || emailAddress == "";
  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setPassword("");
        setError(error.message.replace(/\//g, ""));
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}/</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="post">
            <Form.Input
              placeholder="First name"
              value={firstname}
              onChange={({ target }) => setFirstname(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is created as a dummy project by Thaha
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}

export default Signin;
