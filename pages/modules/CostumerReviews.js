import Image from "next/image";
import james from "../../images/jamescharles.png";
import jessica from "../../images/jessicabados.png";
import woofsy from "../../images/misterwoofsychan.png";

const CostumerReviews = () => {
  return (
    <div>
      <h2>Customer Reviews</h2>
      <div>
        <Image src={jessica} alt="Jessica Bados" />
        <h3>Jessice Bados</h3>
        <h4>Professional Food Critic</h4>
        <h4>Score: 4.8/5</h4>
        <span>
          <strong>Review:</strong>
          Nullam vulputate, ligula maximus fermentum blandit, neque quam lobortis risus, vitae sagittis orci velit et quam. Cras accumsan, nisl vitae ullamcorper malesuada, leo orci luctus metus, hendrerit vehicula nulla erat eu sapien. Nunc dapibus vehicula sapien, quis condimentum lacus pharetra sit amet. Integer dapibus, metus nec dapibus gravida, lacus nulla egestas dui, at elementum sem justo ac ante. Donec turpis erat, vulputate et laoreet sed, feugiat non odio. Duis non tellus arcu. Etiam tempor nunc id tortor commodo, ac pulvinar nulla efficitur. Donec eget sapien eu erat tincidunt convallis vel eget est. Maecenas luctus tellus sit amet turpis congue elementum non eget est. In interdum, erat non venenatis ultrices, felis ex sagittis lacus, eget vulputate sem orci vel diam. Praesent nibh metus, sollicitudin a auctor ac, aliquet eu massa. Praesent sit amet nunc consectetur orci ultricies finibus. Pellentesque ultrices nunc ex, et euismod eros blandit eu. Vivamus augue justo, elementum id dictum eu, mattis id ex. Vivamus in iaculis dui.
        </span>
      </div>

      <div>
        <Image src={james} alt="James Charles" />
        <h3>James Charles</h3>
        <h4>Regular Customer</h4>
        <h4>Score: 4.9/5</h4>
        <span>
          <strong>Review:</strong>
          Aliquam mattis, est sed molestie condimentum, quam ex imperdiet sapien, ullamcorper sollicitudin mi tellus ac ligula. Nulla elit magna, semper quis nulla vel, posuere hendrerit nisl. Vestibulum posuere ante eleifend ex varius, id luctus turpis venenatis. Sed nulla ligula, lobortis nec nisl quis, lobortis interdum lectus. In scelerisque sapien nunc, congue mattis lectus gravida non. Pellentesque porttitor turpis a nibh vestibulum suscipit. Proin sodales, ex vitae consequat viverra, justo tellus auctor est, nec vehicula velit neque ac est.
        </span>
      </div>

      <div>
        <Image src={woofsy} alt="Mister Woofsychan" />
        <h3>Mister Woofsychan</h3>
        <h4>Burger Critic</h4>
        <h4>Score: 5/5</h4>
        <span>
          <strong>Review:</strong>
          Curabitur a molestie tortor. Integer sed metus vel eros scelerisque eleifend ultricies at tortor. Fusce tellus mi, vehicula vitae sodales ac, vestibulum id turpis. Sed aliquam tempor eros nec dignissim. Proin sodales, ex vitae consequat viverra, justo tellus auctor est, nec vehicula velit neque ac est. Cras sollicitudin iaculis arcu, ut posuere eros hendrerit non. Donec porta pharetra ultricies. Nulla commodo augue ut auctor pretium. Duis luctus neque eget volutpat tincidunt. Nulla facilisi. Pellentesque id fermentum lectus. Etiam facilisis est at magna porta euismod.
        </span>
      </div>
    </div>
  );
};

export default CostumerReviews;
