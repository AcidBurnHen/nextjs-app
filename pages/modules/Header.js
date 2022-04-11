import Image from "next/image";
import logo from "../../images/burgerhall.png";

const Header = () => {
  return (
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
          <li>
            <a href="/locations">Locations</a>
          </li>
          <div>
            <a href="#reservations">Reservations</a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
