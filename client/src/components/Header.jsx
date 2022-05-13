import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylesheets/Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddPost");
    } else if (location.pathname === "/postAuthors") {
      setActiveTab("PostAuthors");
    }
  }, [location]);
  return (
    <div className="header">
      <div className="header-right">
        <Link to="/">
          <p className={`${activeTab === "Home" ? "active " : ""} `}>Home</p>
        </Link>
        <Link to="/add">
          <p className={`${activeTab === "AddPost" ? "active " : ""} `}>
            Add Post
          </p>
        </Link>
        <Link to="/postAuthors">
          <p className={`${activeTab === "PostAuthors" ? "active " : ""} `}>
            Post Authors
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
