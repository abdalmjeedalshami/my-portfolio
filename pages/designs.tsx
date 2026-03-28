import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "I'm an avid self-taught designer too!" }}
    >
      <Heading />
      {/* <Projects /> */}
      {/* <More /> */}
    </Page>
  );
}

export default designs;
