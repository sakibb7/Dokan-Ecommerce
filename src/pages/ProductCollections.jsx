import Navbar from "../layouts/global/Navbar";
import { products } from "../data/productData";
import SingleProduct from "../components/home/SingleProduct";
import EarnMoney from "../layouts/home/EarnMoney";
import Footer from "../layouts/global/Footer";
import { sectionMenu } from "../data/menuItems";
import { useState } from "react";

const ProductCollections = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [active, setActive] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (individualSpan) => {
    setActive(individualSpan.id);
    setCategory(individualSpan.name);
    filterFunction(individualSpan.name);
  };

  const filterFunction = (name) => {
    if (products.length > 1) {
      const filter = products.filter((product) => product.category === name);
      setFilteredProducts(filter);
    } else {
      console.log("no products to filter");
    }
  };
  return (
    <section>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="py-16 w-1/2 sm:w-full sm:px-8">
          <h1 className="text-4xl font-[600] text-slate-800 py-4 sm:text-center">
            All Products
          </h1>
          <p className="text-slate-600">
            We not only help you design exceptional products, but also make it
            easy for you to share your designs with more like-minded people.
          </p>
        </div>
        <div className="flexBetween text-white xl:text-[17px] sm:text-sm font-[500] xl:py-10 sm:py-4 border-b">
          <div className="flex xl:justify-between sm:flex-col xl:gap-12 sm:gap-4 w-full px-4">
            <div className="flex justify-start items-center sm:gap-6 xl:gap-8">
              <button className="bg-slate-900 px-5 rounded-full py-2">
                All Items
              </button>
              <div className="flexCenter xl:gap-14 sm:gap-4">
                {sectionMenu.map((individualSpan, index) => (
                  <button
                    key={index}
                    className="text-slate-500"
                    onClick={() => handleChange(individualSpan)}
                  >
                    {individualSpan.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:py-4">
              <button className="bg-slate-900 px-8 rounded-full py-2 sm:py-3 w-full">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h1 className="text-2xl font-[500] text-center">{category}</h1>
          <div className="py-10">
            {active ? (
              <div>
                {filteredProducts.length > 0 && (
                  <div className="grid xl:grid-cols-4 gap-8  sm:p-12">
                    {filteredProducts.map(
                      ({
                        id,
                        image,
                        title,
                        shortDesc,
                        price,
                        rating,
                        reviews,
                        wishlist,
                      }) => (
                        <div className="" key={id}>
                          <SingleProduct
                            image={image}
                            title={title}
                            shortDesc={shortDesc}
                            price={price}
                            rating={rating}
                            reviews={reviews}
                            wishlist={wishlist}
                          />
                        </div>
                      )
                    )}
                  </div>
                )}

                {filteredProducts.length < 1 && (
                  <>
                    <p>There are no products available in this section</p>
                  </>
                )}
              </div>
            ) : (
              <div className="grid xl:grid-cols-4 gap-8 sm:p-12">
                {products.map(
                  ({
                    id,
                    image,
                    title,
                    shortDesc,
                    price,
                    rating,
                    reviews,
                    wishlist,
                    offerDetails,
                  }) => (
                    <div className="" key={id}>
                      <SingleProduct
                        image={image}
                        title={title}
                        shortDesc={shortDesc}
                        price={price}
                        rating={rating}
                        reviews={reviews}
                        wishlist={wishlist}
                        offerDetails={offerDetails}
                      />
                    </div>
                  )
                )}
              </div>
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
