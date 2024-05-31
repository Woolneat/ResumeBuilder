import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, id) => {
    if (id === "4") {
      // Log out the user
      sessionStorage.removeItem('user');
      // Navigate to login page
      navigate('/login');
      return;
    }

    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) navigate("/login");
    else {
      const ids = ["1", "2", "3", "4"];
      ids.forEach((e) => {
        document.getElementById(e).className = "nav-link";
      });
      document.getElementById(id).className = "nav-link active";
      navigate(path);
    }
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div
                  id="-1"
                  className="navbar-brand ptr ms-auto"
                  onClick={() => navigate("/")}
                >
                  Resume Builder
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item ptr">
                      <div
                        id="1"
                        className="nav-link active"
                        aria-current="page"
                        onClick={() => handleNavigation("/", "1")}
                      >
                        Home
                      </div>
                    </li>
                    <li className="nav-item ptr">
                      <div
                        id="2"
                        className="nav-link"
                        onClick={() => {
                          handleNavigation("/my-files", "2");
                        }}
                      >
                        My Files
                      </div>
                    </li>
                    <li className="nav-item ptr">
                      <div
                        id="3"
                        className="nav-link"
                        onClick={() => handleNavigation("/about", "3")}
                      >
                        About Us
                      </div>
                    </li>
                    <li className="nav-item ptr">
                      <div
                        id="4"
                        className="nav-link"
                        onClick={() => handleNavigation("/logout", "4")}
                      >
                        Logout
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
