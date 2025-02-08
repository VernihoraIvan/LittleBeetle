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
import { useDonation } from "@/zustand/donationStore";
import { useOrderLines } from "@/zustand/orderLinesStore";

const GooglePayEl = ({ isDonation }: { isDonation: boolean }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  const products = useCart((state) => state.items);
  const donations = useDonation((state) => state.items);
  const orderLines = useOrderLines((state) => state.orderLines);

  let totalFee = 0;
  useEffect(() => {
    if (isDonation) {
      totalFee = donations.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    } else {
      const totalDeliveryFee = orderLines.reduce(
        (sum, line) => sum + (line.totalDeliveryFee || 0),
        0
      );
      const price = products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      totalFee = price + totalDeliveryFee;
    }
  }, [isDonation, donations, products, orderLines]);
  const [canMakePayment, setCanMakePayment] =
    useState<CanMakePaymentResult | null>(null);

  useEffect(() => {
    if (!stripe) return;
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
          console.warn("Google Pay is not available.");
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
        <div className="">
          {!canMakePayment && (
            <p className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
              <InfoIcon className="h-4 w-4" />
              Google Pay is not available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GooglePayEl;
