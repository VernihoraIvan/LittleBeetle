import titleImg from "@/assets/images/book_title.png";

const Home = () => {
  return (
    <div className="flex justify-center pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen h-screen bg-home-bg">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS ">
        <img
          src={titleImg}
          alt="a book title"
          className="w-titleW mb-8 mt-mainTitleM"
        />
        <h2 className="font-secondaryRegular text-primWhiteFaint text-linkS">
          This project is a reflection of teamwork and kindness.
        </h2>
      </div>
    </div>
  );
};
3;
export default Home;
