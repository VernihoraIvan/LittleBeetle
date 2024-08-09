export interface ShipmentElProps {
  title: string;
  imgPath?: string[];
}

const ShipmentEl = ({ title, imgPath }: ShipmentElProps) => {
  return (
    <div className="mt-8">
      {imgPath && (
        <img
          className="h-purchImgH mr-12 w-imgSW"
          src={imgPath[0]}
          alt="image of a book"
        />
      )}
      <h3 className="text-xl font-secondarySBold mt-2">{title}</h3>
      <div className="w-imgH flex gap-5 mt-9 border border-primPurpleFaintM p-2">
		<button className="bg-adrButton py-gapS px-2 text-primWhite w-1/2">Use my address</button>
		<button className="py-gapS px-2 w-1/2">Use different address</button>
      </div>
    </div>
  );
};

export default ShipmentEl;
