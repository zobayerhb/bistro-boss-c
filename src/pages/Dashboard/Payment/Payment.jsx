import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO: ADD PUBLISHING KEY
const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="payment"
        subheading="please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
