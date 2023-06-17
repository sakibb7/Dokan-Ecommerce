import SectionTitle from "../../components/home/SectionTitle";
import GiftCard from "../../components/home/GiftCard";
import { dog } from "../../assets";

const DiscoverSlider = () => {
  return (
    <div>
      <div className="py-20 px-[150px]">
        <div className="max-w-screen-xl mx-auto ">
          <SectionTitle
            titleFirstPart="Discover more."
            titleSecondPart="Good things are waiting for you"
          />
        </div>
        <div className="grid grid-cols-3 gap-6 pt-10">
          <div className="bg-orange-300 rounded-[15px]">
            <GiftCard
              title="Explore new arrivals"
              headingFirst="Shop the latest"
              headingSecond="from top brands"
              image={dog}
            />
          </div>
          <div className="bg-green-300 rounded-[15px]">
            <GiftCard
              title="Digital gift cards"
              headingFirst="Give the gift"
              headingSecond="of choice"
              image={dog}
            />
          </div>
          <div className="bg-cyan-300 rounded-[15px]">
            <GiftCard
              title="Sale collection"
              headingFirst="Up to"
              headingSecond="80% off retail"
              image={dog}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSlider;
