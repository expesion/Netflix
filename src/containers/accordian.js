import React from "react";
import { Accordian } from "../components";
import faqsData from "../fixtures/faqs.json";
function AccordianContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {faqsData.map((item) => (
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      ))}
    </Accordian>
  );
}

export default AccordianContainer;
