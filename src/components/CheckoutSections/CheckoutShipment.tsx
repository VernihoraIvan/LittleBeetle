import { useShipment } from "@/zustand/shipmentStore";
import ShippingSummary from "../ShippingSummary";
import ShipmentEl from "../Elements/ShipmentEl";
import { useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";

const CheckoutShipment = () => {
  const shipmentStore = useShipment((state) => state.shipment);
  console.log(shipmentStore);
  const fee = useShipment((state) => state.fee);
  const products = useCart((state) => state.items);

  const productToDisplay = includedProducts.concat(extraProducts);

  // const setFee = useShipment((state) => state.setFee);

  const filteredForMyself = products.filter(
    (product) => product.isAGift === false
  );
  const filteredAsGift = products.filter((product) => product.isAGift === true);
  console.log(filteredForMyself);
  console.log(filteredAsGift);
  console.log(fee);
  return (
    <section className="py-10 flex">
      <div className="w-contW">
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
      <ShippingSummary subTotal={10} shippingFee={fee[0]} />
    </section>
  );
};

export default CheckoutShipment;
