import {
  Button,
  Container,
  Image,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { motion as m } from "framer-motion";
import { Tooltip, Button as Btn, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faSign } from "@fortawesome/free-solid-svg-icons";
import { Login } from "../account/Login";
import { useState } from "react";

type NavItemProps = {
  to: any;
  children: any;
};

const NavItem = ({ to, children }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const linkStyle = {
    color: "#9d9ead",
    textDecoration: isActive ? "underline" : "none",
  };

  return (
    <Nav.Link as={NavLink} to={to} style={linkStyle}>
      <span>{children}</span>
    </Nav.Link>
  );
};

export function Navbar () {
  const { openCart, cartQuantity } = useShoppingCart();
  const [openLoginModal, setLoginModal] = useState(false);
  const location = useLocation();

  const handleCLoseLogin = () => {
    setLoginModal(false);
  };

  const handleShowLogin = () => {
    setLoginModal(true);
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 3, ease: "easeIn" }}
    >
      <NavbarBs sticky="top" className="bg-dark shadow-sm mb-5">
        <Container>
          <div style={{ marginRight: "3rem" }}>
            <Image
              width={70}
              height={70}
              style={{ objectFit: "cover" }}
              src="/imgs/spaceishtar.png"
              roundedCircle
            />
          </div>
          <Nav className="me-auto">
            <NavItem to="/">
              <h4 style={{ color: "white" }}>Home</h4>
            </NavItem>
            <NavItem to="/store">
              <h4 style={{ color: "white" }}>Store</h4>
            </NavItem>
            <NavItem to="/about">
              <h4 style={{ color: "white" }}>About</h4>
            </NavItem>
          </Nav>
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
          <Tooltip placement="bottom" title="Sign in">
            <Btn
              icon={<FontAwesomeIcon icon={faQuestion} />}
              style={{
                marginLeft: "20px",
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
              className="rounded-circle"
              onClick={handleShowLogin}
            />
            <Modal
              style={{
                padding: 0,
                margin: 0,
                width: "100%",
              }}
              centered
              open={openLoginModal}
              onCancel={handleCLoseLogin}
              footer={false}
              width={650}
              destroyOnClose

            >
              <Login />
            </Modal>
          </Tooltip>
        </Container>
      </NavbarBs>
    </m.div>
  );
}
