/** @jsxImportSource @emotion/react */
import dynamic from "next/dynamic";
import { FC } from "react";
import { P5RawProps } from "./P5Raw";

const P5Raw = dynamic(() => import("./P5Raw"), { ssr: false });

export type P5Props = P5RawProps;

const P5: FC<P5Props> = ({ sketch }) => {
  return <P5Raw sketch={sketch} />;
};

export default P5;
