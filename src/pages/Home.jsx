import Navbar from "../layouts/global/Navbar";
import DeliverySteps from "../layouts/home/DeliverySteps";
import DiscoverSlider from "../layouts/home/DiscoverSlider";
import EarnMoney from "../layouts/home/EarnMoney";
import Explore from "../layouts/home/Explore";
import HeroSlider from "../layouts/home/HeroSlider";
import NewArrivals from "../layouts/home/NewArrivals";
import TrendingSection from "../layouts/home/TrendingSection";
import SpecialOffer from "../layouts/home/SpecialOffer";
import Reviews from "../layouts/home/Reviews";
import Footer from "../layouts/global/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <DiscoverSlider />
      <NewArrivals />
      <DeliverySteps />
      <EarnMoney />
      <Explore />
      <TrendingSection />
      <SpecialOffer />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
