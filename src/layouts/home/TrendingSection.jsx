import { trendingProduct } from "../../data/productData";
import SingleProduct from "../../components/home/SingleProduct";
import SortingCard from "../../components/home/SortingCard";

const TrendingSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-40">
      <div>
        <h1 className="text-4xl font-[600]">What&apos;s trending now</h1>
        <p className="text-slate-600 text-lg py-5">
          Discover the most trending products in Dokan
        </p>
      </div>
      <SortingCard />
      <div className="py-10 grid grid-cols-4 gap-8">
        {trendingProduct.map(
          ({ id, image, title, shortDesc, price, rating, reviews }) => (
            <div className="" key={id}>
              <SingleProduct
                image={image}
                title={title}
                shortDesc={shortDesc}
                price={price}
                rating={rating}
                reviews={reviews}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
