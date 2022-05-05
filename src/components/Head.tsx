// eslint-disable-next-line
import NextHead from "next/head";
import { FC } from "react";

export type HeadProps = {
  titles?: Array<string>;
  description?: string;
};
const Head: FC<HeadProps> = ({ titles = [], description }) => (
  <NextHead>
    <title>{["Sketches", ...titles].join(" - ")}</title>
    <meta name="description" content={description ?? ""} />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
