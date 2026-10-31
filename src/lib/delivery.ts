const raw = import.meta.env.VITE_DELIVERY_COEFFICIENT;

// Multiplier applied to delivery fees; falls back to 1 when the env var is unset.
export const DELIVERY_COEFFICIENT = raw ? Number(raw) : 1;
