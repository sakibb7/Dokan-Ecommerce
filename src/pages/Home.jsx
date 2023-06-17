import Navbar from "../layouts/global/Navbar";
import DiscoverSlider from "../layouts/home/DiscoverSlider";
import HeroSlider from "../layouts/home/HeroSlider";
import NewArrivals from "../layouts/home/NewArrivals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <DiscoverSlider />
      <NewArrivals />
    </div>
  );
};

export default Home;
