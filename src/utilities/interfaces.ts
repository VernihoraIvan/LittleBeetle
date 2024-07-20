export interface OverlayProps {
  isOverlay: boolean;
  setPrice: (price: number) => void;
  handleOverlay: () => void;
  price: number;
  setOverlay: (isOverlay: boolean) => void;
}

export interface PopUpProps {
  handleOverlay: () => void;
  price: number;
  // setIsOverlay: () => void;
  // setPrice: () => void;
  isOverlay: boolean;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setIsOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductElProps {
  title: string;
  description: string;
  to: string;
}

export interface SubDonationProps {
  title: string;
  description: string;
  imagePath: string;
}

export interface TitleProps {
  title: string;
}

export interface PurchaseElProps {
  name: string;
  price: number;
  quantity: number;
  total: number;
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
