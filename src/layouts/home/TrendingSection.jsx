import { sectionMenu } from "../../data/menuItems";
import { trendingProduct } from "../../data/productData";
import SingleProduct from "../../components/home/SingleProduct";

const TrendingSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-40">
      <div>
        <h1 className="text-4xl font-[600]">What&apos;s trending now</h1>
        <p className="text-slate-600 text-lg py-5">
          Discover the most trending products in Dokan
        </p>
      </div>
      <div className="flex justify-between items-center text-white text-[17px] font-[500] py-10 border-b">
        <div className="flex justiy-center items-center gap-12">
          <button className="bg-slate-900 px-5 rounded-full py-2">
            All Items
          </button>
          <div className="flex justify-center items-center gap-14">
            {sectionMenu.map(({ id, name }) => (
              <button key={id} className="text-slate-500">
                {name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button className="bg-slate-900 px-8 rounded-full py-2">
            Filter
          </button>
        </div>
      </div>
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
