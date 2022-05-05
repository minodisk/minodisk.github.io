import { ReadonlyDeep } from "type-fest";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import { Box, Center, HStack, PFC, Text, VBetween } from "./ui";

export type SketchPageProps = ReadonlyDeep<{
  title: string;
  //   sketch: (p: p5) => void;
}>;

const SketchPage: PFC<SketchPageProps> = ({ children, title }) => {
  //   const { hasher } = useHasher();
  //   const [hash, setHash] = useState<string | null>(null);
  // const [filename, setFilename] = useState<string | null>(null);

  // const onRequestSaving = useCallback(() => {
  //   setFilename(`${title}-${new Date().getTime()}`);
  // }, [title]);

  //   useEffect(() => {
  //     if (!hasher) {
  //       return;
  //     }
  //     setHash(hasher.h32ToString(sketch.toString()));
  //   }, [hasher, sketch]);

  return (
    <>
      <Head titles={[title]} />
      <Header>{/* <Button onClick={onRequestSaving}>_</Button> */}</Header>
      <main>
        <Center py={2}>
          <HStack gap={2}>
            <Box width={400} height={400}>
              {children}
            </Box>
            <VBetween>
              <Text>{title}</Text>
              {/* <Text>{hash}</Text> */}
            </VBetween>
          </HStack>
        </Center>
      </main>
      <Footer />
    </>
  );
};

export default SketchPage;
