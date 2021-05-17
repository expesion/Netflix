import React, { useState } from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const isInvalid = password === "" || emailAddress == "";
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Signin</Form.Title>
          {error && <Form.Error>{error}/</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="post">
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
              Sign In
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}

export default Signin;
