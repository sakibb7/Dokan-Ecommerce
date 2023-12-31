import { reviews } from "../../data/reviews";
import {
  reviewBackground1,
  reviewBackground2,
  reviewBackground3,
  reviewBackground4,
  reviewBackground5,
  reviewBackground6,
  quoteLeft,
  quoteRight,
} from "../../assets";

const Reviews = () => {
  return (
    <div className="max-w-screen-xl mx-auto flexCol items-center gap-8 py-20 sm:py-10 relative mb-20 sm:mb-0">
      <img
        src={reviewBackground1}
        className="absolute top-1/3 left-48 sm:hidden"
        alt=""
      />
      <img
        src={reviewBackground2}
        className="absolute top-1/3 right-48 sm:hidden"
        alt=""
      />
      <img
        src={reviewBackground3}
        className="absolute bottom-48 left-16 sm:hidden"
        alt=""
      />
      <img
        src={reviewBackground4}
        className="absolute bottom-48 right-16 sm:hidden"
        alt=""
      />
      <img
        src={reviewBackground5}
        className="absolute bottom-8 left-1/3 sm:hidden"
        alt=""
      />
      <img
        src={reviewBackground6}
        className="absolute bottom-8 right-1/3 sm:hidden"
        alt=""
      />
      <div>
        <h1 className="headingThree sm:text-3xl text-slate-800 pb-4 sm:px-4 text-center">
          Good news from far away 🥇
        </h1>
        <p className="text-gray-600 text-xl sm:text-lg text-center">
          Let&apos;s see what people think of Dokan
        </p>
      </div>
      <div className=" w-1/2 sm:w-full sm:px-2">
        {reviews.map(({ id, review, image, name, star }) => (
          <div key={id} className="flexCol items-center gap-8">
            <img src={image} className="py-6" />
            <div className="flexCol items-center text-2xl pb-10">
              <p className=" text-center font-[400] tracking-wide relative">
                {review}

                <img
                  src={quoteLeft}
                  alt=""
                  className="absolute left-[-80px] sm:left-0 top-0 w-16  sm:opacity-30"
                />
                <img
                  src={quoteRight}
                  alt=""
                  className="absolute right-[-80px] sm:right-0 top-0 w-16 sm:opacity-30"
                />
              </p>
              <p className="font-[600] py-6">{name}</p>
              <p>{star}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
