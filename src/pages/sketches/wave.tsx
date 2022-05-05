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
    key: "wave",
    title: "Wave",
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const distance = 4;
        const radius = 120;
        const t = p.frameCount * 16;

        // p.blendMode(p.BLEND);
        p.background(0);
        // p.fill(0);

        // p.blendMode(p.SCREEN);
        p.stroke(0xff, 0xff, 0xff, 0xff * 0.2);
        // p.noStroke();
        // p.fill(0xff, 0xff, 0xff, 0xff * 0.05);
        p.noFill();

        for (let y = -radius; y <= height + radius; y += distance) {
          p.beginShape();
          for (let x = -radius; x <= width + radius; x += distance) {
            const z = p.noise(x * 0.003, y * 0.01, t * 0.0001);
            p.curveVertex(x, y + (z - 0.5) * radius * 2);
          }
          p.endShape();
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
