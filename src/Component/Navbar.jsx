import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Component/Navbar.css'
import logo from '../Assets/logo.png'; 

function Navbar() {
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
    const body = document.body;

    if (offcanvasElement) {
      offcanvasElement.classList.remove('show');
    }

    // Remove Bootstrap's offcanvas-backdrop
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    body.style.overflow = 'auto';
  };

  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeOffcanvas(); // Close the offcanvas menu
  };

  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar');

    const handleOffcanvasHide = () => {
      document.body.style.overflow = 'auto';
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    };

    if (offcanvasElement) {
      offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasHide);
    }

    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHide);
      }
    };
  }, []);


  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center flex-column flex-md-row" to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            
          />
          <div className="ms-0 ms-md-2 text-center text-md-start">
            <span className="navbar-title d-block"><strong>ENCLOUD</strong></span>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end custom-offcanvas"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            EnCloud IT Solutions
            </h5>
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            
            <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions and Services
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink className="dropdown-item" 
                  to="/infrastructureSolutions"
                  onClick={handleNavLinkClick}
                  >
                    Infrastructure Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/cloudSolutions"
                  onClick={handleNavLinkClick}
                  >
                    Cloud Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/businessContinuity"
                  onClick={handleNavLinkClick}
                  >
                    Business Continuity Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/securitySolutions"
                  onClick={handleNavLinkClick}
                  >
                    Security Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/softwareSolutions"
                  onClick={handleNavLinkClick}
                  >
                    Software Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/ourServices"
                  onClick={handleNavLinkClick}
                  >
                    Our Services
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Alliances and Associations
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink className="dropdown-item" 
                  to="/partnership"
                  onClick={handleNavLinkClick}
                  >
                    Partnership
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/customers"
                  onClick={handleNavLinkClick}
                  >
                    Customers
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink className="dropdown-item" 
                  to="/contactPage"
                  onClick={handleNavLinkClick}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" 
                  to="/career"
                  onClick={handleNavLinkClick}
                  >
                    Career
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          </div>
        </div> 
      </div>
    </nav>
  );
}

export default Navbar;
