/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
      <Heading>Home</Heading>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
