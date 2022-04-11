// Components
import Head from "./modules/Head";
import Header from "./modules/Header";
import HomeBanner from "./modules/HomeBanner";
import BurgerChef from "./modules/BurgerChef";
import CostumerReviews from "./modules/CostumerReviews";
import TrendingRecipes from "./modules/TrendingRecipes";
import Footer from "./modules/Footer";

function Home() {
  return (
    <>
      <Head />
      <Header />
      <HomeBanner />
      <BurgerChef />
      <CostumerReviews />
      <TrendingRecipes />
      <Footer />
    </>
  );
}

export default Home;
