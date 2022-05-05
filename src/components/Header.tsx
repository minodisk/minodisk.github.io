import { Box, H1, Link, PFC, VBetween } from "./ui";

const Header: PFC = ({ children }) => (
  <header
    css={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      background: "black",
    }}
  >
    <VBetween px={4} py={4}>
      <Link href="/" css={{ textDecoration: "none" }}>
        <H1>Sketches</H1>
      </Link>
      <Box>{children}</Box>
    </VBetween>
  </header>
);

export default Header;
