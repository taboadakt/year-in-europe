/** @jsx jsx */
import { jsx } from "theme-ui";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      sx={{
        padding: 4,
        color: "primary",
        fontFamily: "heading",
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
