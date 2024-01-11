import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-img">
        <img src="../../../public/Logo.svg" alt="" />
      </div>
      <div className="header-link">
        <a href="/order">Order </a>
        <a href="/orderReview">Order Review </a>
        <a href="/manageInventory">Manage Inventory </a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
