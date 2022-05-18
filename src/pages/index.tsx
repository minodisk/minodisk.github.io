import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import P5 from "../components/P5";
import { SketchPage } from "../components/SketchPage";
import { Box, Grid, Link, PFC, Text } from "../components/ui";
import * as Indepdep from "./sketches/indepdep";
import * as Monterey from "./sketches/monterey";
import * as Satin from "./sketches/satin";
import * as Virus from "./sketches/virus";
import * as Wave from "./sketches/wave";

const width = 224;
const height = width;

const Home: NextPage = () => {
  const pages: SketchPage[] = [Indepdep, Monterey, Satin, Virus, Wave].map(
    (page) => page.usePage({ noLoop: true, width, height })
  );
  return (
    <Layout>
      <NextSeo />
      <Header />
      <main>
        <Grid gap={4} columnWidth={width}>
          {pages.map(({ slug, title, sketch, dispose }) => (
            <Link href={`/sketches/${slug}`} key={slug}>
              <Box width={width} height={height}>
                <P5 sketch={sketch} dispose={dispose} />
                <Label>{title}</Label>
              </Box>
            </Link>
          ))}
        </Grid>
      </main>
      <Footer />
    </Layout>
  );
};

export const Label: PFC = (props) => (
  <Text
    px={2}
    py={2}
    css={{
      position: "absolute",
      left: 0,
      bottom: 0,
      color: "rgba(255,255,255,0.8)",
      background: "rgba(0,0,0,0.8)",
    }}
    {...props}
  />
);

export default Home;
