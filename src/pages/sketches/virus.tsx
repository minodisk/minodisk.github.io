import { NextPage } from "next";
import p5 from "p5";
import { ReadonlyDeep } from "type-fest";
import P5 from "../../components/P5";
import SketchPage from "../../components/SketchPage";
import { useSketch } from "../../hooks/sketch";

export const usePage = ({
  noLoop = false,
  width = 400,
  height = 400,
}: ReadonlyDeep<{
  noLoop?: boolean;
  width?: number;
  height?: number;
}>) => {
  return {
    key: "virus",
    title: "Virus",
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const distance = 5;
        const radius = 15;

        const t = p.frameCount * 16;
        p.background(0xff);

        for (let y = -radius; y < height + radius; y += distance) {
          for (let x = -radius; x < width + radius; x += distance) {
            const d = p.noise(x * 0.01, y * 0.01, t * 0.0003);
            p.noStroke();
            p.fill(0, 0, 0, 0xff * 0.2);
            p.circle(x, y, d * radius * 2);
          }
        }
      },
    }),
  };
};

const Page: NextPage = () => {
  const { title, sketch } = usePage({});
  return (
    <SketchPage title={title}>
      <P5 sketch={sketch} />
    </SketchPage>
  );
};

export default Page;
