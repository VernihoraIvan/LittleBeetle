import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      id="not-found-page"
      className="surface-dark flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-primPurple px-6 text-center text-primWhite"
    >
      <p className="font-primaryBold text-7xl text-hovYellow md:text-8xl">404</p>
      <h1 className="heading-2">This page wandered off</h1>
      <p className="body max-w-md text-primWhiteFaint">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="btn-accent btn-lg mt-2">
        Back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
