import { useNavigate } from "react-router-dom";

/** Navigates to the printed gifts section on the donation page. */
export const useGoToGifts = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/donation#optional-printed-gifts");
    // wait for the page to render before scrolling
    setTimeout(() => {
      document
        .getElementById("optional-printed-gifts")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
};
