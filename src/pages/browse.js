import React from "react";
import { useContent } from "../hooks";
function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  return <div>Browse</div>;
}

export default Browse;
