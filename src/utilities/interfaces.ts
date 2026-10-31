export interface ProductElProps {
  title: string;
  description?: string;
  to?: string;
  imgPath: string[];
}

export interface ProductEl {
  title: string;
  description: string;
  imagePath: string[];
  weight: number;
  size: string;
  prices: number[];
  element: string;
  to: string;
}
export interface ProductElOptionalProps {
  product: ProductEl;
}

export interface SubDonationProps {
  product: ProductEl;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TitleProps {
  title: string;
}

export interface QuantityAdjusterProps {
  isOverlay?: boolean;
  id: string;
}
export interface PurchaseElProps {
  name: string;
  price: number;
  quantity: number;
  total: number;
  imgPath?: string[];
  id: string;
  language: string;
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
  link: string;
}

export interface SummaryProps {
  subTotal: number;
  shippingFee?: number;
  isDonation?: boolean;
}

export interface CarouselProps {
  images: string[];
}

export interface MyFormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  street_adress: string;
  street_adress2: string;
  city: string;
  postal_code: string;
  id: string;
}

export interface PersonalData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface FormElProps {
  title: string;
  element: string;
  isRequired?: boolean;
  type?: string;
  autoComplete?: string;
  className?: string;
  idPrefix?: string;
}

export interface DonationOptionProps {
  price: number;
  lang: string;
  setLang: (value: string) => void;
  setPrice: (value: number) => void;
}

export interface DeliveryFeeData {
  countries: string[];
  fee: number;
  duration: number;
}
