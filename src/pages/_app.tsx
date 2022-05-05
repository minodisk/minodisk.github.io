import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import { HasherContextProvider } from "../hooks/hasher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "F5.6";
            src: url("/F5.6-Regular.woff2") format("woff2"),
              url("/F5.6-Regular.woff") format("woff"),
              url("/F5.6-Regular.eot") format("eot");
          }

          html,
          body {
            color: white;
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
            font-family: "F5.6", "Helvetica Neue", Arial,
              "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          }

          img,
          canvas {
            vertical-align: bottom;
          }
        `}
      />
      <HasherContextProvider>
        <Component {...pageProps} />
      </HasherContextProvider>
    </>
  );
}

export default MyApp;
