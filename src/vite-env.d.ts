/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_STRIPE_PUBLIC: string;
  readonly VITE_DELIVERY_COEFFICIENT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
