/** @jsxImportSource @emotion/react */
import type p5 from "p5";
import { FC, memo, useEffect, useRef } from "react";
import { ReadonlyDeep } from "type-fest";

export type P5Props = ReadonlyDeep<{
  sketch: (p: p5) => unknown;
  dispose?: () => unknown;
}>;

let P5Constructor: any;

const P5: FC<P5Props> = ({ sketch, dispose }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      // Don't run in SSR.
      return;
    }
    if (!P5Constructor) {
      P5Constructor = require("p5");
    }
    const instance = new P5Constructor(sketch, ref.current);
    return () => {
      if (dispose) {
        dispose();
      }
      instance.setup = instance.draw = null;
      instance.noLoop();
      instance.remove();
      window.cancelAnimationFrame(instance._requestAnimId);
      instance._setup = () => {
        instance.remove();
        window.cancelAnimationFrame(instance._requestAnimId);
        instance._setup = null;
      };
      instance._draw = () => {
        instance.remove();
        window.cancelAnimationFrame(instance._requestAnimId);
        instance._setup = null;
        instance._draw = null;
      };
    };
  }, [dispose, sketch]);

  return <div ref={ref} />;
};

export default memo(P5);
