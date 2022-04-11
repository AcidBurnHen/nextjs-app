import Image from "next/image";
import chef from "../../images/chef2.jpg";

const BurgerChef = () => {
  return (
    <div>
      <h2>Meet Our Burger Specialist</h2>
      <Image src={chef} alt="Chef Antonio Plaucky" />
      <h2>
        Meet our world-renown burger specialist Chef <strong>Antonio Plaucky</strong>
      </h2>
      <p>Fusce mollis varius tellus. Mauris ut malesuada arcu, in congue nulla. Ut a tellus quam. Curabitur convallis rhoncus fermentum. Fusce egestas sit amet eros ut sagittis. Integer malesuada sem risus, ut lobortis velit venenatis ut. Donec consequat mauris vitae enim placerat lacinia. Mauris nec accumsan nisl, facilisis posuere massa. Donec eget ultrices nulla. Fusce eget vulputate diam. Maecenas eget nulla volutpat, finibus lacus vel, aliquet justo. Nunc bibendum eros id nibh convallis, id euismod massa ornare. Nulla euismod est nec fringilla tristique. In pulvinar quam sit amet lacinia rhoncus. Suspendisse luctus sodales rhoncus.</p>
    </div>
  );
};

export default BurgerChef;
