import SectionTitle from "../../components/home/SectionTitle";
import GiftCard from "../../components/home/GiftCard";
import { dog } from "../../assets";

const DiscoverSlider = () => {
  return (
    <div>
      <div className="py-20 xl:px-[150px] sm:px-4">
        <div className="max-w-screen-xl mx-auto ">
          <SectionTitle
            titleFirstPart="Discover more."
            titleSecondPart="Good things are waiting for you"
          />
        </div>
        <div className="grid xl:grid-cols-3 gap-6 pt-10">
          <div className="bg-orange-300 rounded-[15px]">
            <GiftCard
              title="Explore new arrivals"
              heading="Shop the latest from top brands"
              image={dog}
            />
          </div>
          <div className="bg-green-300 rounded-[15px]">
            <GiftCard
              title="Digital gift cards"
              heading="Give the gift of choice"
              image={dog}
            />
          </div>
          <div className="bg-cyan-300 rounded-[15px]">
            <GiftCard
              title="Sale collection"
              heading="Up to 80% off retail"
              image={dog}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSlider;
