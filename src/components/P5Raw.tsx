import p5 from "p5";
import { FC, useCallback, useEffect, useState } from "react";
import { ReadonlyDeep } from "type-fest";

export type P5RawProps = ReadonlyDeep<{
  // filename: string | null;
  sketch: (p: p5) => void;
}>;

const P5Raw: FC<P5RawProps> = ({ sketch }) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [instance, setInstance] = useState<p5 | null>(null);

  const setRef = useCallback(
    (nextElement: HTMLDivElement | null) => {
      if (nextElement === element) {
        return;
      }

      if (element) {
        element.replaceChildren();
      }

      if (nextElement) {
        if (instance) {
          instance.remove();
        }
        setInstance(new p5(sketch, nextElement));
      }

      setElement(nextElement);
    },
    [element, instance, sketch]
  );

  // useEffect(() => {
  //   if (!instance || !filename) {
  //     return;
  //   }
  //   instance.saveCanvas(filename, "jpg");
  // }, [instance, filename]);

  useEffect(() => {
    return () => {
      if (!instance) {
        return;
      }
      instance.remove();
    };
  }, [instance]);

  return <div ref={setRef} />;
};

export default P5Raw;
