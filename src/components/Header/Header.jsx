import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <div className='header-img'>
                <img src="/src/images/Logo.svg" alt="Logo" />
            </div>
            <div className='header-link'>
                <a href="/order">Order </a>
                <a href="/orderReview">Order Review </a>
                <a href="/manageInventory">Manage Inventory </a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;