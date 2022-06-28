import React from "react";
import styled from "styled-components";
import Section from "./Section";
export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description=" Order Online for Touchless Delivery"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Model X "
        description=" Order Online for Touchless Delivery"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Model Y"
        description=" Order Online for Touchless Delivery"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Model 3 "
        description="Order Online for Touchless Delivery "
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America "
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Solar Roof "
        description="Produce Clean Energy
        From Your Roof "
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      >
        {" "}
      </Section>
      <Section
        title="Accessories"
        LeftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
      >
        {" "}
      </Section>
    </Container> 
  );
}
const Container = styled.div`
  height: 100vh;
`;
