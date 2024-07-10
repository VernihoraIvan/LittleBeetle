const BooksSection = () => {
  return (
    <div className="xxl:w-contW">
      <h2 className="font-primaryBold mb-2 text-primPurple  text-titleS">
        The book and lullaby
      </h2>
      <p className="leading-relaxed text-primPurpleFaint w-[1410px] text-2xl font-secondaryRegular">
        This book and lullaby was crafted by over 15 volunteers from around the
        world. They donated their talents to create this project, from beautiful
        illustrations to a soothing melody, to inspire hope and healing.
      </p>
      <ul className="flex justify-between mt-14">
        <li>
          <img src="/src/assets/images/book1.png" alt="image of a book" />
        </li>
        <li>
          <img
            src="/src/assets/images/book2.png"
            alt="little girl holds a book"
          />
        </li>
        <li>
          <img
            src="/src/assets/images/book3.png"
            alt="little girl reads a book"
          />
        </li>
      </ul>
      <div className="flex justify-center mt-20">
        <button className="border border-primPurple py-5 px-buttonP ">
          <p className="text-primPurple text-buttonS font-primarySBold">
            Creators
          </p>
        </button>
      </div>
    </div>
  );
};

export default BooksSection;
