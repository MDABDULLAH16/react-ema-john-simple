import ActiveLInk from "../ActiveLink/ActiveLInk";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-img">
        <ActiveLInk href="/">
          <img src="../../../public/Logo.svg" alt="" />
        </ActiveLInk>
      </div>
      <div className="header-link">
        {/* <ActiveLInk to="/orderReview">Order Review </ActiveLInk> */}
        <ActiveLInk to="/shop">Shop</ActiveLInk>
        <ActiveLInk to="/orders">Orders</ActiveLInk>
        <ActiveLInk to="/inventory">Inventory</ActiveLInk>
        <ActiveLInk to="/login">Login</ActiveLInk>
      </div>
    </nav>
  );
};

export default Header;
