import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecureAxios from "../../../hooks/useSecureAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useSecureAxios();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const [transectionId, setTransectionId] = useState("");
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);
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

        // save payment history to database
        const payment = {
          email: user.email,
          transetionId: paymentIntent.id,
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          price: totalPrice,
          date: new Date(), // TODO: utc date convert. use moment js to
          status: "pending",
        };
        const { data } = await axiosSecure.post("/payments", payment);
        // console.log("data saved", data);
        if (data.paymentRes?.insertedId) {
          toast.success("Thank you for the payment..");
          navigate("/dashboard/paymentHistory");
        }
        refetch();
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
      {transectionId && (
        <p className="text-green-600">Your Transection id: {transectionId}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
