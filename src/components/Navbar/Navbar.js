import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import logo from "../../icons/logo.png";
import useWindowSize from "../../utils/useWindowSize";
import { Col } from "react-bootstrap";

function Navbar() {
  const [open, setOpen] = useState(true);
  const screenWidth = useWindowSize().width;

  useEffect(() => {
    if (screenWidth < 768) {
      setOpen(false);
    }
    if (screenWidth > 768) {
      setOpen(true);
    }
  }, [screenWidth]);

  const onClick = (e) => {
    setOpen((open) => !open);
  };

  const responsiveCls = !open ? "mobile" : "";

  return (
    <Col className={`section-7 leftMenu ${responsiveCls}`}>
      <div className="menuTop">
        <div onClick={(e) => onClick(e)} className={`icon-${responsiveCls}`}>
          <span className="icon-svg-burger"></span>
        </div>
      </div>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="user">
        <span className="user-alt">
          <span className="icon-svg-head"></span>
          Halil Yıldızdal
        </span>
        <span className="icon-svg-logout"></span>
      </div>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li className="menu-items" key={index}>
              <span
                className={`icon-svg-${item.iconSvg} ${responsiveCls}`}
              ></span>
              <a href="#">
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="settings">
        <span className={`icon-svg-settings ${responsiveCls}`}> </span>
        <span>Settings</span>
      </div>
    </Col>
  );
}

export default Navbar;
