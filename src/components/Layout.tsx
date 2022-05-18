import { Box, Center, PFC } from "./ui";

const Layout: PFC = ({ children }) => (
  <Center>
    <Box
      px={4}
      css={{
        boxSizing: "content-box",
        width: 1200,
      }}
    >
      {children}
    </Box>
  </Center>
);

export default Layout;
