export interface OverlayProps {
  isOverlay: boolean;
  setPrice: (price: number) => void;
  handleOverlay: () => void;
  price: number;
  setOverlay: (isOverlay: boolean) => void;
  // isOverlayLang: boolean;
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
  // setIsOverlay: () => void;
  // setPrice: () => void;
  isOverlay: boolean;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setIsOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  isOverlayLang: boolean;
}
export interface PopUpLangProps {
  handleOverlayLang: () => void;
  lang: string;
  // setIsOverlay: () => void;
  // setPrice: () => void;
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
  name: string;
  price: number;
  isOverlay?: boolean;
  // quantityEl: number;
  // setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
export interface QuantityAdjusterWStateProps {
  name: string;
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

export interface CarouselProps {
  images: string[];
}
