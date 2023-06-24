import Navbar from "../layouts/global/Navbar";
import { products } from "../data/productData";
import SingleProduct from "../components/home/SingleProduct";
import EarnMoney from "../layouts/home/EarnMoney";
import Footer from "../layouts/global/Footer";
import SortingCard from "../components/home/SortingCard";

const ProductCollections = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="py-16 w-1/2">
          <h1 className="text-4xl font-[600] text-slate-800 py-4">
            All Products
          </h1>
          <p className="text-slate-600">
            We not only help you design exceptional products, but also make it
            easy for you to share your designs with more like-minded people.
          </p>
        </div>
        <SortingCard />
        <div className="border-b">
          <div className="py-10 grid grid-cols-4 gap-8">
            {products.map(
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
        </div>
        <div>
          <EarnMoney />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ProductCollections;
