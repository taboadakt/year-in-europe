/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { ThemeUICSSObject } from "theme-ui";

const navLinkStyle: ThemeUICSSObject = {
  color: "background",
  fontFamily: "body",
  textDecoration: "none",
  fontSize: 0,
  fontWeight: "body",
  paddingX: 2,
  paddingY: 2,
};

const Navigation = () => {
  return (
    <nav sx={{ backgroundColor: "primary" }}>
      <Flex sx={{ marginLeft: 3 }}>
        <a sx={navLinkStyle} href="/">
          Home
        </a>
        <a sx={navLinkStyle} href="/summary">
          Summary
        </a>
      </Flex>
    </nav>
  );
};

export default Navigation;
