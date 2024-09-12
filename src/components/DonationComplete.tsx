import Title from "./Title";

const DonationComplete = () => {
  return (
    <>
      <Title title="" />
      <div className=" flex justify-center items-center flex-gggrow h-[calc(100vh-40px)]">
        <div className="flex flex-col gap-[18px] items-center w-[925px]">
          <h2 className="font-secondaryBold text-buttonS ">
            Thank you! Your donation is complete.
          </h2>
          <p className="font-secondaryRegular text-linkS text-center">
            We sent an email with the access to the digital products included to
            the address you provided. We hope the book and lullaby we've created
            bring you some joy and a touch of magic.
          </p>
        </div>
      </div>
    </>
  );
};

export default DonationComplete;
