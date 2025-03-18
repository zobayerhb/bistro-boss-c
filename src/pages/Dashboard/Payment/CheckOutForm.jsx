import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecureAxios from "../../../hooks/useSecureAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useSecureAxios();
  const [cart] = useCart();
  const { user } = useAuth();
  const [transectionId, setTransectionId] = useState("");
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );
  console.log("calculate total price", totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      console.log("total price ---> ", totalPrice);
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card == null) return;

    //  payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    // payment card confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Payment confirm error", confirmError);
    } else {
      console.log("Peyment Confirm", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transection id: ", paymentIntent.id);
        setTransectionId(paymentIntent.id);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-md btn-primary my-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600 font-semibold">{error}</p>
      {
        transectionId && <p className="text-green-600">Your Transection id: {transectionId}</p>
      }
    </form>
  );
};

export default CheckOutForm;
