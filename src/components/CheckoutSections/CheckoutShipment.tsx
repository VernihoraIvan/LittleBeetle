import { useShipment } from "@/zustand/shipmentStore";
import ShippingSummary from "../ShippingSummary";
import ShipmentEl from "../Elements/ShipmentEl";
import { useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import ButtonTo from "../ButtonTo";

const CheckoutShipment = () => {
  const shipmentStore = useShipment((state) => state.shipment);
  console.log(shipmentStore);
  const products = useCart((state) => state.items);
  const totalFee = useShipment((state) => state.fee).reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const productToDisplay = includedProducts.concat(extraProducts);

  const filteredForMyself = products.filter(
    (product) => product.isAGift === false
  );
  const filteredAsGift = products.filter((product) => product.isAGift === true);

  return (
    <section className="py-10 flex flex-col">
      <div className="flex ">
        <div className="w-contW flex flex-col gap-[110px]">
          <div className="flex flex-col">
            {filteredForMyself.length > 0 && (
              <h2 className="font-secondaryBold text-buttonS">For myself</h2>
            )}
            {filteredForMyself.length > 0 &&
              filteredForMyself.map((product) => (
                <ShipmentEl
                  key={product.id}
                  title={product.name}
                  imgPath={
                    productToDisplay.find((p) => p.title === product.name)
                      ?.imagePath
                  }
                />
              ))}
          </div>
          <div>
            {filteredAsGift.length > 0 && (
              <h2 className="font-secondaryBold text-buttonS">As a gift</h2>
            )}
            {filteredAsGift.length > 0 &&
              filteredAsGift.map((product) => (
                <ShipmentEl
                  key={product.id}
                  title={product.name}
                  imgPath={
                    productToDisplay.find((p) => p.title === product.name)
                      ?.imagePath
                  }
                />
              ))}
          </div>
        </div>
        <ShippingSummary subTotal={totalFee} shippingFee={0} />
      </div>
      <ButtonTo
        to="/checkout/payment"
        title="CONTINUE TO NEXT"
        style="w-fit mt-bookPT text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl"
      />
    </section>
  );
};

export default CheckoutShipment;
