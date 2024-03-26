import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="center">
        <Link to="/" className="link">
          <span>Shop</span>
        </Link>
      </div>
      <div className="center">
        <Link to="/cart" className="link">
          <span className="cart">Cart</span>
          <ShoppingCart size={32} className="cartIcon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
