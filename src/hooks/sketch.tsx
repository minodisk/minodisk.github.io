import p5 from "p5";
import { useCallback } from "react";
import { ReadonlyDeep } from "type-fest";

export const useSketch = ({
  noLoop,
  width,
  height,
  draw,
}: ReadonlyDeep<{
  noLoop: boolean;
  width: number;
  height: number;
  draw: (p: p5) => unknown;
}>) => {
  const sketch = useCallback(
    (p: p5) => {
      p.setup = () => {
        p.frameRate(60);
        const canvas = p.createCanvas(width, height);
        if (noLoop) {
          p.noLoop();
          canvas.mouseOver(() => p.loop());
          canvas.mouseOut(() => p.noLoop());
        }
      };

      if (draw) {
        p.draw = () => {
          draw(p);
        };
      }
    },
    [draw, height, noLoop, width]
  );

  return sketch;
};
