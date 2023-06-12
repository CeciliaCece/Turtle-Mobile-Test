import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

const NavLink = ({ route, title }) => {
  return (
    <>
      <li>
        <Link className="fs-6 nav-link" to={route}>
          {title}
        </Link>
      </li>
    </>
  );
};

const OffLink = ({ route, title, close }) => {
  return (
    <>
      <li className="sidebar-link nav-item w-100">
        <Link
          className=" nav-link py-5  d-flex align-items-center"
          to={route}
          onClick={close}
        >
          <h6 className="off-link m-0 w-100 text-center fs-6">{title}</h6>
        </Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const navDatas = useSelector((state) => {
    return state.nav;
  });
  const [open, setOpen] = useState("");
  const openHandler = () => {
    setOpen("");
  };

  const handleResize = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={open}>
        <aside className="off-canvas position-fixed bg-dark">
          <div className="off-content">
            <nav className="d-flex flex-column h-100">
              <Link
                className="close-icon d-flex align-items-center justify-content-end p-3 w-100 "
                onClick={() => {
                  setOpen("");
                }}
              >
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <IoClose />
                </IconContext.Provider>
              </Link>
              <ul className="nav d-flex flex-column align-items-center h-auto">
                {navDatas.map((item, index) => (
                  <OffLink
                    route={item.path}
                    title={item.title}
                    close={openHandler}
                    key={index}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </aside>
        <div className="position-fixed top-0 start-50 translate-middle-x navbar-layout">
          <nav className="navbar nav-bar bg-dark sticky-top d-flex">
            <div className="d-none d-lg-block">
              <div className="d-flex align-items-center">
                <ul className="nav">
                  {navDatas.map((item, index) => (
                    <NavLink route={item.path} title={item.title} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="d-lg-none">
              <Link
                className="nav-link bar-icon px-3 d-flex align-items-center"
                onClick={() => {
                  setOpen("off-toggle");
                }}
              >
                <FaBars size={"1.75rem"} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
