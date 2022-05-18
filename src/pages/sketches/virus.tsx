import { NextPage } from "next";
import p5 from "p5";
import { ReadonlyDeep } from "type-fest";
import SketchPage from "../../components/SketchPage";
import { useSketch } from "../../hooks/sketch";

export const usePage = ({
  noLoop = false,
  width = 900,
  height = 600,
}: ReadonlyDeep<{
  noLoop?: boolean;
  width?: number;
  height?: number;
}>) => {
  return {
    slug: "virus",
    title: "Virus",
    width,
    height,
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const dx = 10;
        const dy = 10;
        const radius = 30;

        const t = p.frameCount * 16;
        p.background(0);

        for (let y = -radius; y < height + radius; y += dy) {
          for (let x = -radius; x < width + radius; x += dx) {
            const d = p.noise(x * 0.01, y * 0.01, t * 0.0003);
            p.noStroke();
            p.fill(0xff, 0xff, 0xff, 0xff * 0.03);
            p.circle(x, y, d * radius * 2);
          }
        }
      },
    }),
  };
};

const Page: NextPage = () => <SketchPage usePage={usePage} />;

export default Page;
