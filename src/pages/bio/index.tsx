import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Link } from "../../components/ui";

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo />
      <Header title="Bio" />
      <main>
        <ul css={{ listStyleType: "none" }}>
          <li>
            <Link href="https://twitter.com/minodisk">Twitter</Link>
          </li>
          <li>
            <Link href="https://github.com/minodisk">GitHub</Link>
          </li>
          <li>
            <Link href="https://zenn.dev/minodisk">Zenn</Link>
          </li>
          <li>
            <Link href="https://qiita.com/minodisk">Qiita</Link>
          </li>
          <li>
            <Link href="https://dev.to/minodisk">DEV</Link>
          </li>
          <li>
            <Link href="https://speakerdeck.com/minodisk">Speaker Deck</Link>
          </li>
          <li>
            <Link href="https://marketplace.visualstudio.com/publishers/minodisk">
              Visual Studio Marketplace
            </Link>
          </li>
          <li>
            <Link href="https://lapras.com/public/minodisk">LAPRAS</Link>
          </li>
          <li>
            <Link href="https://www.npmjs.com/~minodisk">npm</Link>
          </li>
          <li>
            <Link href="https://connpass.com/user/minodisk/">connpass</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
