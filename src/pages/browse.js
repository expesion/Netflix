import React from "react";
import { useContent } from "../hooks";
function Browse() {
  const { series } = useContent("series");
  console.log(series);
  return <div>Browse</div>;
}

export default Browse;
