import { Navigate } from "react-router-dom";

// The cart lives in the first checkout step.
const Cart = () => <Navigate to="/checkout/contribution" replace />;

export default Cart;
