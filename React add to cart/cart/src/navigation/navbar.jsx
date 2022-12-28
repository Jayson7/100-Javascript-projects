import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <Link class=" text-white navbar-brand text-white" to="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class=" text-white nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Homepage
                </Link>
              </li>
              <li class="nav-item">
                <Link class=" text-white nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class=" text-white nav-link" to="cart">
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link class=" text-white nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
