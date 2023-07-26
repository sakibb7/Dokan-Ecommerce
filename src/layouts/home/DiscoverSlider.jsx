import SectionTitle from "../../components/home/SectionTitle";
import GiftCard from "../../components/home/GiftCard";
import { dog } from "../../assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./DiscoverSlider.css";

// import required modules
import { Pagination } from "swiper/modules";

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
        <div className="pt-10">
          {/* For large screen */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="">
              <SwiperSlide>
                <div className="bg-orange-300 rounded-[15px]">
                  <GiftCard
                    title="Explore new arrivals"
                    heading="Shop the latest from top brands"
                    image={dog}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-300 rounded-[15px]">
                  <GiftCard
                    title="Digital gift cards"
                    heading="Give the gift of choice"
                    image={dog}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-cyan-300 rounded-[15px]">
                  <GiftCard
                    title="Sale collection"
                    heading="Up to 80% off retail"
                    image={dog}
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSlider;
