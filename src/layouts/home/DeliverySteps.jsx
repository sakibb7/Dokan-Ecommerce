import StepCard from "../../components/home/StepCard";
import { step1, step2, step3, step4 } from "../../assets";

const DeliverySteps = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-20 py-16 border-b">
      <StepCard
        image={step1}
        title="Enjoy the product"
        step="Step 1"
        desc="Have fun and enjoy your 5-star quality products"
        bgColor="#fecaca"
        color="#ef4444"
      />
      <StepCard
        image={step2}
        title="Enjoy the product"
        step="Step 2"
        desc="Have fun and enjoy your 5-star quality products"
        bgColor="#fef3c7"
        color="#f59e0b"
      />
      <StepCard
        image={step3}
        title="Enjoy the product"
        step="Step 3"
        desc="Have fun and enjoy your 5-star quality products"
        bgColor="#ecfccb"
        color="#84cc16"
      />
      <StepCard
        image={step4}
        title="Enjoy the product"
        step="Step 4"
        desc="Have fun and enjoy your 5-star quality products"
        bgColor="#cffafe"
        color="#06b6d4"
      />
    </div>
  );
};

export default DeliverySteps;
