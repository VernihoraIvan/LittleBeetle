interface PopUpELProps {
  value: string | number;
  setValue: (value: string | number) => void;
  setDefault: (value: string | number) => void;
}

const PopUpEl = ({ value, setValue, setDefault }: PopUpELProps) => {
  const onClickHandler = (value: string | number) => {
    setValue(value);
    setDefault(value);
  };

  const valueIsNumber = typeof value === "number";
  return (
    <div
      className="menu-item py-2 cursor-pointer hover:bg-dropHover transition duration-300 px-4
            xl:text-copyS  xl:p-3 
            lg:text-[14px] lg:py-[6px] lg:px-[8px] 
            md:text-[14px] md:py-[6px] md:px-[8px]"
      onClick={() => onClickHandler(value)}
    >
      {valueIsNumber ? `£ ${value}` : value}
    </div>
  );
};
export default PopUpEl;
