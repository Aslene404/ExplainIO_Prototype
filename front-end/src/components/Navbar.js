import React from 'react';

const Navbar = () => {
  // Replace this with the URL of the logo image you want to use
  const logoUrl = 'your-logo-url.jpg';

  // Replace this with the user's name
  const userName = 'John Doe';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: '300px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoUrl} alt="Logo" width="50" height="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo02"
          style={{ marginLeft: '20px' }} // Add spacing to the left of the content
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginRight: '20px' }}>
            {/* Add spacing to the right of the list */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-3">
            <div
              className="rounded-circle bg-secondary"
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px', // Add spacing to the right of the avatar
              }}
            >
              <span style={{ color: '#fff' }}>{userName.charAt(0)}</span>
            </div>
            <span>{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
