import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import ButtonTo from "./ButtonTo";

const BooksSection = () => {
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-bookPB">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <h2
          className="font-primaryBold mb-2 text-primPurple  text-titleS
         xl:text-buttonS"
        >
          About the project
        </h2>
        <p
          className="leading-relaxed text-primPurpleFaint text-[24px] font-secondaryRegular
          xl:text-[20px]"
        >
          Over 15 creative professionals from around the world have come
          together to craft a lullaby and an illustrated book, offered
          exclusively on a donation basis, along with several other products.
          Every item is designed to bring some comfort and joy, while
          channelling all proceeds to support children affected by the war in
          Ukraine. Our mission is to help provide psychological rehabilitation
          and raise crucial funds for the organisation delivering this vital
          care.
        </p>
        <ul className="flex justify-between mt-14 gap-5">
          <li>
            <img src={book1} alt="image of a book" />
          </li>
          <li>
            <img src={book2} alt="little girl holds a book" />
          </li>
          <li>
            <img src={book3} alt="little girl reads a book" />
          </li>
        </ul>
        <div className="flex justify-center mt-20">
          <ButtonTo
            to={"/creators"}
            title="Creators"
            style="text-primPurple text-buttonS font-primarySBold hover:bg-whiteHover transition duration-300 border border-primPurple py-5 px-buttonP 
            xl:text-linkS xl:py-[14px] xl:px-[96px]
            lg:text-linkS lg:py-[8px] lg:px-[75px]
            md:text-copyS md:py-[8px] md:px-[60px] md:w-[260px] text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
