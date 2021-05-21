import styled from "styled-components/macro";

export const Container = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const Heading = styled.h1`
  font-size: 4vw;
  margin: 0;
  font-weight: 400;
  color: #fff;
`;
export const SubHeading = styled.h3`
  font-size: 1.3vw;
  color: #666;
  font-weight: 400;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  align-items: center;
`;
export const Image = styled.img`
  height: 8vw;
  width: 8vw;
  max-height: 180px;
  max-width: 180px;
  min-height: 80px;
  min-width: 80px;
  border-radius: 4px;
  margin-right: 10px;
`;
export const Input = styled.input`
  width: 18em;
  height: 2em;
  background: #666;
  border: 1px solid transparent;
  margin: 0 0.8em 0 0;
  padding: 0.2em 0.6em;
  color: #fff;
  font-size: 1.3vw;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-indent: 0.1vw;
`;
export const Button = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid #fff;
  font-weight: 700;
  display: block;
  margin: 2em 0 1em 0;
  font-size: 1.2vw;
  border: 1px solid grey;
  color: grey;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
  display: inline-block;
  margin-right: 20px;
  &: hover {
    background: #c00;
    border: 1px solid #c00;
    color: #fff;
  }
`;
