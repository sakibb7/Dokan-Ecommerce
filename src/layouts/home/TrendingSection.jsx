import SingleProduct from "../../components/home/SingleProduct";
import SortingCard from "../../components/home/SortingCard";
import { products } from "../../data/productData";

const TrendingSection = () => {
  const trendingProducts = products.filter(
    (product) => product.trending === true
  );
  return (
    <section className="max-w-screen-xl mx-auto pt-28">
      <div>
        <h1 className="headingThree">What&apos;s trending now</h1>
        <p className="text-slate-600 text-lg py-5">
          Discover the most trending products in Dokan
        </p>
      </div>
      <SortingCard />
      <div className="py-10 grid grid-cols-4 gap-8">
        {trendingProducts.map(
          ({ id, image, title, price, rating, reviews, offerDetails }) => (
            <div className="" key={id}>
              <SingleProduct
                image={image}
                title={title}
                price={price}
                rating={rating}
                reviews={reviews}
                offerDetails={offerDetails}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
