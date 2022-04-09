import Head from "next/head";
import Image from "next/image";

import logo from "../images/burgerhall.png";

function Home() {
  return (
    <div>
      <Head>
        <title>Burger Hall</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Best burgers, burger recipes, burger lovers" />
        <meta name="description" content="Burger Hall. Favorite recipes of burger lovers" />
      </Head>
      <header>
        <Image src={logo} alt="site logo" />
        <nav>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
