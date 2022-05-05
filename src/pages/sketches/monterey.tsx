import { NextPage } from "next";
import p5, { Color, Graphics } from "p5";
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
}>): Readonly<{
  key: string;
  title: string;
  sketch: (p: p5) => unknown;
}> => {
  const graphics: Array<Graphics> = [];

  return {
    key: "monterey",
    title: "Monterey",
    sketch: useSketch({
      noLoop,
      width,
      height,
      draw: (p: p5) => {
        const dx = 4;
        const dy = 50;
        const radius = 600;
        const t = p.frameCount * 16;

        p.background(0);
        // p.noStroke();

        const topColorStart = p.color("#712175");
        const topColorEnd = p.color("#11032b");
        const bottomColorStart = p.color("#37016a");
        const bottomColorEnd = p.color("#0e0225");

        while (graphics.length > 0) {
          const g = graphics.pop();
          g?.remove();
        }

        for (let y = 0; y <= height; y += dy) {
          const g = p.createGraphics(width, height);
          const radical = g.lerp(1, 0.1, y / height);

          const topColor = g.lerpColor(topColorStart, topColorEnd, y / height);
          const bottomColor = g.lerpColor(
            bottomColorStart,
            bottomColorEnd,
            y / height
          );
          gradient(g, 0, 0, width, height, topColor, bottomColor);

          {
            // masking by erasing
            g.erase();
            {
              // create inverted mask
              g.beginShape();
              g.noStroke();
              g.fill(0);
              for (let x = 0; x <= width; x += dx) {
                const z = g.noise(x * 0.003, y * 0.002, t * 0.00005);
                const yy = y + (z - 0.5) * radius * 2 * radical;
                if (x === 0) {
                  // mask shape start
                  g.vertex(0, -radius);
                  g.curveVertex(x, yy);
                }
                g.curveVertex(x, yy);
                if (x === width) {
                  // mask shape end
                  g.curveVertex(x, yy);
                  g.vertex(width, -radius);
                }
              }
              g.endShape(g.CLOSE);
            }
            g.noErase();
          }

          graphics.push(g);
          p.image(g, 0, 0);
        }
      },
    }),
  };
};

function gradient(
  p: p5,
  x: number,
  y: number,
  w: number,
  h: number,
  c1: Color,
  c2: Color
) {
  p.noFill();

  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    const inter = p.map(i, y, y + h, 0, 1);
    const c = p.lerpColor(c1, c2, inter);
    p.stroke(c);
    p.line(x, i, x + w, i);
  }
}

const Page: NextPage = () => {
  const { title, sketch } = usePage({});
  return (
    <SketchPage title={title}>
      <P5 sketch={sketch} />
    </SketchPage>
  );
};

export default Page;
