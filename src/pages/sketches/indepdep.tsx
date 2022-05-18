import { NextPage } from "next";
import p5, { Graphics } from "p5";
import { ReadonlyDeep } from "type-fest";
import SketchPage from "../../components/SketchPage";

export const usePage = ({
  noLoop = false,
  width = 900,
  height = 600,
}: ReadonlyDeep<{
  noLoop?: boolean;
  width?: number;
  height?: number;
}>) => {
  const xt = 1000 * Math.random();
  const yt = 6000 + 1000 * Math.random();

  const createSketch = () => {
    let balls: {
      x: number;
      y: number;
      glow: Graphics;
      seedX: number;
      seedY: number;
    }[] = [];
    const graphics: Array<Graphics> = [];

    return {
      sketch: (p: p5) => {
        p.setup = () => {
          p.frameRate(60);
          const canvas = p.createCanvas(width, height);
          if (noLoop) {
            p.noLoop();
            canvas.mouseOver(() => p.loop());
            canvas.mouseOut(() => p.noLoop());
          }
          for (const ball of balls) {
            ball.glow.remove();
          }

          balls = [];
          const glow = createGlow(p, 0.5, 10);
          graphics.push(glow);
          for (let y = 0; y <= height; y += 40) {
            for (let x = 0; x <= width; x += 40) {
              balls.push({
                x,
                y,
                glow,
                seedX: x * 0.006,
                seedY: y * 0.006,
              });
            }
          }
          return balls;
        };

        p.draw = () => {
          const t = p.frameCount * 16;
          p.clear(0, 0, 0, 0);

          for (const ball of balls) {
            ball.x = width * p.noise(ball.seedX, ball.seedY, xt + t * 0.0001);
            ball.y = height * p.noise(ball.seedX, ball.seedY, yt + t * 0.0001);

            p.image(
              ball.glow,
              ball.x - ball.glow.width / 2,
              ball.y - ball.glow.height / 2
            );
          }

          p.loadPixels();
          for (let i = 0; i < p.pixels.length; i += 4) {
            const add = p.pixels[i + 3] > 0xff * 0.99;
            p.pixels[i + 0] = 0xff;
            p.pixels[i + 1] = 0xff;
            p.pixels[i + 2] = 0xff;
            p.pixels[i + 3] = add ? p.pixels[i + 3] : 0;
          }
          p.updatePixels();
        };
      },
      dispose: () => {
        while (graphics.length > 0) {
          graphics.pop()?.remove();
        }
      },
    };
  };

  return {
    slug: "indepdep",
    title: "Indepdep",
    width,
    height,
    ...createSketch(),
  };
};

const createGlow = (p: p5, radius: number, blur: number) => {
  const size = (radius + blur) * 2;
  const g = p.createGraphics(size, size);

  g.noStroke();

  for (let b = 0; b < blur; b++) {
    g.fill(0xff, 0xff * (1 - b / blur));
    g.circle(size / 2, size / 2, radius + b);
  }
  return g;
};

const Page: NextPage = () => <SketchPage usePage={usePage} />;

export default Page;
