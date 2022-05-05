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
    key: "satin",
    title: "Satin",
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const rectWidth = 1;
        const rectHeight = 8;
        const distnace = 4;

        const t = p.frameCount * 16;
        p.background(0x00);

        for (let y = 0; y <= height; y += distnace) {
          for (let x = 0; x <= width; x += distnace) {
            const rotate = p.noise(x * 0.001, y * 0.001, t * 0.0001);
            p.push();
            p.translate(x, y);
            p.rotate(100 * rotate);
            p.noStroke();
            p.fill(0xff, 0xff, 0xff, 0xff * 0.6);
            p.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
            p.pop();
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
