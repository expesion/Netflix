import React from "react";
import { Accordian, OptForm } from "../components";
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
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>Ready to watch? Enter your email right now</OptForm.Text>
      </OptForm>
    </Accordian>
  );
}

export default AccordianContainer;
