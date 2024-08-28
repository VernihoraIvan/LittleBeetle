import { ShipmentDetails } from "@/zustand/shipmentStore";
import { FormikTouched } from "formik";

export interface OverlayProps {
  isOverlay: boolean;
  setPrice: (price: number) => void;
  handleOverlay: () => void;
  price: number;
  setOverlay: (isOverlay: boolean) => void;
}

export interface OverlayLangProps {
  isOverlayLang: boolean;
  setLang: (price: string) => void;
  handleOverlayLang: () => void;
  lang: string;
  setIsOverlayLang: (isOverlay: boolean) => void;
}

export interface PopUpPriceProps {
  handleOverlay: () => void;
  price: number;
  isOverlay: boolean;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setIsOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  isOverlayLang: boolean;
}
export interface PopUpLangProps {
  handleOverlayLang: () => void;
  lang: string;
  isOverlayLang: boolean;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  setIsOverlayLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductElProps {
  title: string;
  description?: string;
  to?: string;
  imgPath: string[];
}

export interface SubDonationProps {
  title: string;
  description: string;
  imagePath: string[];
}

export interface TitleProps {
  title: string;
}

export interface QuantityAdjusterProps {
  isOverlay?: boolean;
  id: string;
}
export interface QuantityAdjusterWStateProps {
  price: number;
  isOverlay?: boolean;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
export interface PurchaseElProps {
  name: string;
  price: number;
  quantity: number;
  total: number;
  imgPath?: string[];
  id: string;
}

export interface ButtonToProps {
  to: string;
  title: string;
  style: string;
  onClick?: () => void;
}

export interface CheckoutContributionElProps {
  name: string;
  quantity: number;
  total: number;
  language: string;
  imgPath?: string[];
  id: string;
  isGiftpossible?: boolean;
}

export interface titleProps {
  title: string;
  description: string;
}

export interface CreatorsElProps {
  name: string;
  location: string;
  description: string;
}

export interface SummaryProps {
  subTotal: number;
  shippingFee: number;
}

export interface SummaryCheckoutProps {
  subTotal: number;
  shippingFee?: number;
}

export interface CarouselProps {
  images: string[];
}

export interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAdress: string;
  streetAdress2: string;
  city: string;
  postalCode: string;
  id: string;
  shipment?: ShipmentDetails;
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface FormElProps {
  // errors?: FormikErrors<MyFormValues>;
  errors?: string;
  touched: FormikTouched<MyFormValues>;
  title: string;
  element: string;
  isRequired?: boolean;
}

export interface DonationOptionProps {
  handleOverlayLang: () => void;
  lang: string;
  setIsOverlayLang: React.Dispatch<React.SetStateAction<boolean>>;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  isOverlayLang: boolean;
  handleOverlayPrice: () => void;
  price: number;
  isOverlayPrice: boolean;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setIsOverlayPrice: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChecked: (value: boolean) => void;
}
