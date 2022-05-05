import { Box, PFC, Text } from "./ui";

const Footer: PFC = () => (
  <footer
    css={{
      position: "sticky",
      bottom: 0,
      zIndex: 1,
      background: "black",
    }}
  >
    <Box px={4} py={2}>
      <Text>@minodisk</Text>
    </Box>
  </footer>
);

export default Footer;
