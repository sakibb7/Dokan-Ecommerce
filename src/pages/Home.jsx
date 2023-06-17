import Navbar from "../layouts/global/Navbar";
import DeliverySteps from "../layouts/home/DeliverySteps";
import DiscoverSlider from "../layouts/home/DiscoverSlider";
import EarnMoney from "../layouts/home/EarnMoney";
import HeroSlider from "../layouts/home/HeroSlider";
import NewArrivals from "../layouts/home/NewArrivals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <DiscoverSlider />
      <NewArrivals />
      <DeliverySteps />
      <EarnMoney />
    </div>
  );
};

export default Home;
