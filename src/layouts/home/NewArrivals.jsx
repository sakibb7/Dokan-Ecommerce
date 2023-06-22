import SectionTitle from "../../components/home/SectionTitle";
import SingleProduct from "../../components/home/SingleProduct";
import { products } from "../../data/productData";

const NewArrivals = () => {
  const newArrivals = products.filter((product) => product.newArrival === true);
  return (
    <div className="max-w-screen-xl mx-auto border-b border-1 pb-10">
      <div className="pl-4">
        <SectionTitle
          titleFirstPart="New Arrivals"
          titleSecondPart="REY backpacks & bags"
        />
      </div>
      <div className="py-10 grid grid-cols-4 gap-8">
        {newArrivals.map(({ id, image, title, price, rating, reviews }) => (
          <div className="" key={id}>
            <SingleProduct
              image={image}
              title={title}
              price={price}
              rating={rating}
              reviews={reviews}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
