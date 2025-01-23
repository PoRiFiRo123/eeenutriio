import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  // Controls sub-menu of "Shop"
  const [shopOpen, setShopOpen] = useState(false);

  // Track current window width to differentiate desktop vs. mobile
  const [width, setWidth] = useState(window.innerWidth);

  // For checking if user is on desktop (≥ 992px)
  const isDesktop = width >= 992;

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((error) => console.log(error));
  };

  // Listen for scroll to fix header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFiexd(true);
      } else {
        setHeaderFiexd(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for window resizing to update `width`
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`header-section style-4 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top (mobile) */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      {/* header top ends */}

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  {/* HOME */}
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  {/* SHOP with dropdown of categories */}
                  <li
                    className="menu-item-has-children"
                    // Only use hover for desktop
                    onMouseEnter={() => isDesktop && setShopOpen(true)}
                    onMouseLeave={() => isDesktop && setShopOpen(false)}
                    // On mobile/tablet, toggle sub-menu with a click
                    onClick={() => !isDesktop && setShopOpen(!shopOpen)}
                  >
                    <NavLink to="/shop">Shop</NavLink>
                    {shopOpen && (
                      <ul className="submenu lab-ul">
                        {/* Link to All Categories */}
                        <li>
                          <NavLink to="/shop?category=all">All Categories</NavLink>
                        </li>
                        {/* Or each category below */}
                        <li>
                          <NavLink to="/shop?category=nutrient-boosters">
                            Nutrient Boosters
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop?category=sprouted-flour">
                            Sprouted Flour
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop?category=meal-moments">
                            Meal Moments
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop?category=healthy-bites">
                            Healthy Bites
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop?category=pure-extracts">
                            Pure Extracts
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop?category=activated-millet/flour">
                            Activated Millet/Flour
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Other menu items */}
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              {/* If user is logged in */}
              {user ? (
                <>
                  <div>
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        className="nav-profile"
                        alt="user profile"
                      />
                    ) : (
                      <img
                        src="/src/assets/images/author/01.jpg"
                        className="nav-profile"
                        alt="default user"
                      />
                    )}
                  </div>
                  <NavDropdown id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    <NavDropdown.Item href="/cart-page">Shopping Cart</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cart-page">Order</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                    <span>Create Account</span>
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              )}

              {/* Mobile menu toggler (burger icon) */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social toggler (mobile) */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header bottom ends */}
    </header>
  );
};

export default NavItems;
