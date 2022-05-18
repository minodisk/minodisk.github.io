import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { ReadonlyDeep } from "type-fest";
import { useHasher } from "../hooks/hasher";
import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import P5, { P5Props } from "./P5";
import { Box, HStack, PFC, Text } from "./ui";

export type SketchPage = P5Props &
  ReadonlyDeep<{
    slug: string;
    title: string;
    width: number;
    height: number;
  }>;

export type SketchPageProps = ReadonlyDeep<{
  usePage: (
    pageProps: ReadonlyDeep<{
      noLoop?: boolean;
      width?: number;
      height?: number;
    }>
  ) => SketchPage;
}>;

const SketchPage: PFC<SketchPageProps> = ({ usePage }) => {
  const { slug, title, width, height, sketch, dispose } = usePage({
    width: 1200,
    height: 650,
  });
  const { hasher } = useHasher();
  const [hash, setHash] = useState<string | null>(null);
  // const [filename, setFilename] = useState<string | null>(null);

  // const onRequestSaving = useCallback(() => {
  //   setFilename(`${title}-${new Date().getTime()}`);
  // }, [title]);

  useEffect(() => {
    if (!hasher) {
      return;
    }
    setHash(hasher.h32ToString(sketch.toString()));
  }, [hasher, sketch]);

  return (
    <Layout>
      <NextSeo
        title={title}
        openGraph={{
          images: [
            {
              url: `https://minodisk.github.io/sketches/${slug}.png`,
              width: 1200,
              height: 650,
              alt: title,
            },
          ],
        }}
      />
      <Header title={title}>
        {/* <Button onClick={onRequestSaving}>_</Button> */}
        <Text css={{ fontSize: 10 }}>{hash}</Text>
      </Header>
      <main>
        <HStack gap={2}>
          <Box width={width} height={height}>
            <P5 sketch={sketch} dispose={dispose} />
          </Box>
        </HStack>
      </main>
      <Footer />
    </Layout>
  );
};

export default SketchPage;
