import StepCard from "../../components/home/StepCard";
import { stepImage } from "../../assets";

const DeliverySteps = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-20 py-16 border-b">
      <StepCard
        image={stepImage}
        title="Enjoy the product"
        step="Step 1"
        desc="Have fun and enjoy your 5-star quality products"
      />
      <StepCard
        image={stepImage}
        title="Enjoy the product"
        step="Step 2"
        desc="Have fun and enjoy your 5-star quality products"
      />
      <StepCard
        image={stepImage}
        title="Enjoy the product"
        step="Step 3"
        desc="Have fun and enjoy your 5-star quality products"
      />
      <StepCard
        image={stepImage}
        title="Enjoy the product"
        step="Step 4"
        desc="Have fun and enjoy your 5-star quality products"
      />
    </div>
  );
};

export default DeliverySteps;
