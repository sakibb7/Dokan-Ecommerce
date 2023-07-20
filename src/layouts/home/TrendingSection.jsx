// import SingleProduct from "../../components/home/SingleProduct";
// import SortingCard from "../../components/home/SortingCard";
// import { products } from "../../data/productData";
import ProductCollections from "../../pages/ProductCollections";

const TrendingSection = () => {
  // const trendingProducts = products.filter(
  //   (product) => product.trending === true
  // );
  return (
    <section className="max-w-screen-xl mx-auto pt-28">
      <div className="sm:px-4">
        <h1 className="xl:text-5xl sm:text-3xl font-[600] text-slate-800 ">
          What&apos;s trending now
        </h1>
        <p className="text-slate-600 text-lg py-5">
          Discover the most trending products in Dokan
        </p>
      </div>
      {/* <SortingCard />
      <div className="py-10 grid xl:grid-cols-4 gap-8 sm:p-12">
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
      </div> */}

      <ProductCollections />
    </section>
  );
};

export default TrendingSection;
