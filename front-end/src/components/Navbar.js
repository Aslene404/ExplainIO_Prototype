import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigation = useNavigate();
const handleSubmit = () => {
  navigation("/profil");  };
  const contact = () => {
    navigation("/contact");  };
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style={{ padding:0 }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="100" height="50" />
        </a>
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
        <div
          class="  navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: 50 }}
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item" onClick={contact} >
              <span class="nav-link " >
              Contact
              </span>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div  onClick={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 5,
                marginRight: 30
              }}
            >
              <img 
                src={avatar}
                alt="Avatar"
                class="rounded-circle me-2"
                width="45"
                height="45"
                style={{ border: '4px solid #157347' }} />
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
