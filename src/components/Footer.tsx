import { Box, Link, PFC, Text } from "./ui";

const Footer: PFC = () => (
  <footer
    css={{
      position: "sticky",
      bottom: 0,
      zIndex: 1,
      background: "black",
    }}
  >
    <Box py={4}>
      <Link href="/bio">
        <Text>@</Text>
      </Link>
    </Box>
  </footer>
);

export default Footer;
