import type { NextPage } from "next";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import P5 from "../components/P5";
import { Box, Grid, Link, PFC, Text } from "../components/ui";
import * as Monterey from "./sketches/monterey";
import * as Satin from "./sketches/satin";
import * as Virus from "./sketches/virus";
import * as Wave from "./sketches/wave";

const Home: NextPage = () => {
  const pages = [
    Monterey.usePage({ noLoop: true, width: 200, height: 200 }),
    Satin.usePage({ noLoop: true, width: 200, height: 200 }),
    Virus.usePage({ noLoop: true, width: 200, height: 200 }),
    Wave.usePage({ noLoop: true, width: 200, height: 200 }),
  ];
  return (
    <>
      <Head />
      <Header />
      <main>
        <Grid px={4} gap={4}>
          {pages.map(({ key, title, sketch }) => (
            <Link href={`/sketches/${key}`} key={key}>
              <Box width={200} height={200}>
                <P5 sketch={sketch} />
                <Label>{title}</Label>
              </Box>
            </Link>
          ))}
        </Grid>
      </main>
      <Footer />
    </>
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
