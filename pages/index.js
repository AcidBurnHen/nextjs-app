import Head from "next/head";

import Header from "./modules/Header";

function Home() {
  return (
    <div>
      <Head>
        <title>Burger Hall</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Best burgers, burger recipes, burger lovers" />
        <meta name="description" content="Burger Hall. Favorite recipes of burger lovers" />
      </Head>
      <Header />
    </div>
  );
}

export default Home;
