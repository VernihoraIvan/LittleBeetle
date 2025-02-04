import { useEffect, useState } from "react";
// import { Loader2 } from "lucide-react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  PaymentRequestOptions,
  PaymentRequest,
  CanMakePaymentResult,
} from "@stripe/stripe-js";
import { useCart } from "@/zustand/productStore";
import { InfoIcon } from "lucide-react";

const GooglePayEl = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<
    PaymentRequest | null | undefined
  >(undefined);

  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const [canMakePayment, setCanMakePayment] =
    useState<CanMakePaymentResult | null>(null);

  useEffect(() => {
    if (stripe) {
      const paymentRequestOptions: PaymentRequestOptions = {
        country: "GB",
        currency: "gbp",
        total: {
          label: "Total",
          amount: totalFee * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      };
      const pr = stripe.paymentRequest(paymentRequestOptions);
      pr.canMakePayment().then((result) => {
        if (result && result.googlePay) {
          setCanMakePayment(result);
          setPaymentRequest(pr);
        } else {
          console.warn(
            "Google Pay is not available on this device or browser."
          );
        }
      });

      pr.on("paymentmethod", async (event) => {
        event.complete("success");
      });
    }
  }, [stripe, totalFee]);

  return (
    <div>
      {paymentRequest && canMakePayment ? (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      ) : (
        <div className="flex flex-col items-center gap-2">
          {!canMakePayment && (
            <p className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
              <InfoIcon className="h-4 w-4" />
              Google Pay is not available on this device or browser
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GooglePayEl;
