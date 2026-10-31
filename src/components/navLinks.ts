import clsx from "clsx";

export const navLinks = [
  { to: "/", label: "About" },
  { to: "/donation", label: "Your Support" },
  { to: "/creators", label: "Creators" },
  { to: "/contact", label: "Contact" },
];

export const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "relative py-2 transition-colors duration-200 hover:text-hovYellow",
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-hovYellow after:transition-transform after:duration-300 after:ease-out",
    isActive ? "text-hovYellow after:scale-x-100" : "after:scale-x-0"
  );
