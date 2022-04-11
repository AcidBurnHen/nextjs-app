import Image from "next/image";
import banner from "../../images/burger-banner.png";

const HomeBanner = () => {
  return (
    <div>
      <h1>
        Burger <strong>Hall</strong>
      </h1>
      <span>Burger Hall is a fan-favorite burger restaurant and place to find burger recipes.</span>
      <Image src={banner} alt="burger hall banner" />
    </div>
  );
};

export default HomeBanner;
