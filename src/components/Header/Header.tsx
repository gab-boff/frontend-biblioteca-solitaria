import { useState, useEffect } from "react";

import CesuscLogo from "../../images/png/cesusc-logo.png";
import MenuOpenIcon from "../../images/svg/MenuOpenIcon";
import MenuCloseIcon from "../../images/svg/MenuCloseIcon";

import HeaderInterface from "../../interfaces/HeaderInterface";

import "./styles.scss";
import { Link } from "react-router-dom";

function Header({ children }: any): JSX.Element {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [size, setSize] = useState<HeaderInterface>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width !== undefined && size?.width > 768 && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [size.width, menuIsOpen]);

  const menuToggleHandler = (): void => {
    setMenuIsOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="content">
        <Link to="/">
          <img src={CesuscLogo} alt="" width="100" height="80" />
        </Link>
        <nav
          className={`navbar ${
            menuIsOpen && size.width !== undefined && size.width < 768
              ? "isMenu"
              : ""
          }`}
        >
          <ul className="children-wrapper">{children}</ul>
        </nav>
        <div className="toggle">
          {!menuIsOpen ? (
            <div onClick={menuToggleHandler}>
              <MenuOpenIcon />
            </div>
          ) : (
            <div onClick={menuToggleHandler}>
              <MenuCloseIcon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
