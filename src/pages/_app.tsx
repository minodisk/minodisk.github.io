import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import { HasherContextProvider } from "../hooks/hasher";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "F1.8";
            src: url("/F1.8-Regular.woff2") format("woff2"),
              url("/F1.8-Regular.woff") format("woff"),
              url("/F1.8-Regular.eot") format("eot"),
              url("/F1.8-Regular.ttf") format("ttf");
          }

          html,
          body {
            background-color: black;
          }

          html,
          body,
          #__next {
            height: 100%;
          }

          * {
            padding: 0;
            margin: 0;
            font-family: "F1.8", "Helvetica Neue", Arial,
              "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
            font-size: 10px;
            color: white;
            text-decoration: unset;
            border: unset;
          }

          img,
          svg,
          canvas {
            vertical-align: bottom;
          }
        `}
      />
      <DefaultSeo
        defaultTitle="Sketches"
        titleTemplate="Sketches::%s"
        description="Quick sketches by @minodisk."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://minodisk.github.io/",
          site_name: "Sketches",
        }}
        twitter={{
          handle: "@minodisk",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <HasherContextProvider>
        <Component {...pageProps} />
      </HasherContextProvider>
    </>
  );
}

export default MyApp;
