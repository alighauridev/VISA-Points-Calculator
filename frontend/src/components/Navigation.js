import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

import { LinkOff, LinkOffOutlined, LinkRounded } from "@material-ui/icons";
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);


  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  return (
    <>
      <header
        className={navToggler ? "nav__active" : ""}
        style={
          scroll
            ? {
              background: "rgb(10 8 7 / 75%)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 0.7px #ffffff",
              transitions: "0.5s ease-in-out",
            }
            : null
        }
      >
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="#">
                  <img src="https://www.visa2land.com/wp-content/uploads/2023/03/Visa2Land-logo.png" alt="" />
                </a>
              </div>
              <nav>
                <ul className={navToggler ? "ul__active" : ""}>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind} className={ite.subMenu ? "has-submenu" : ""}>
                        <a
                          style={navColor ? { textShadow: "none" } : {}}
                          href={ite.path}
                          target={'_blank'}
                        >
                          {ite.name}
                        </a>
                        {ite.subMenu && (
                          <ul className="submenu">
                            {ite.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className={subItem.subMenu ? "has-submenu" : ""}>
                                <a href={subItem.path} target="_blank">
                                  {subItem.name}
                                </a>
                                {subItem.subMenu && (<ul className="submenu">
                                  {subItem.subMenu.map((subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      <a href={subSubItem.path} target="_blank">
                                        {subSubItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}

                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="nav__btns">

                <i onClick={() => barBtn()} className="bars">
                  <img
                    src={
                      !navToggler ? "/images/bb (1).png" : "/images/bb (2).png"
                    }
                    alt=""
                    style={{
                      width: "33px",
                      height: "auto",
                      filter: "invert(1)",
                      cursor: "pointer",
                      transition: "all 9s ease-out"
                    }}
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
      </div>
    </>
  );
};

export default Navigation;
