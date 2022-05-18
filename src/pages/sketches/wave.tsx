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
    slug: "wave",
    title: "Wave",
    width,
    height,
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const dx = 60;
        const dy = 5;
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

        for (let y = -radius; y <= height + radius; y += dy) {
          p.beginShape();
          for (let x = -radius; x <= width + radius; x += dx) {
            const z = p.noise(x * 0.003, y * 0.01, t * 0.0001);
            p.curveVertex(x, y + (z - 0.5) * radius * 2);
          }
          p.endShape();
        }
      },
    }),
  };
};

const Page: NextPage = () => <SketchPage usePage={usePage} />;

export default Page;
