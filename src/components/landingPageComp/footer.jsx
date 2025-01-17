import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "animate.css";
import image1 from "../../../assets/logo.png";

export const Footer = () => {
  return (
    <Container className="mt-10 w-full">
      <footer className="text-center text-lg-start text-muted">
        <section className="footer-section">
          <div className="container text-center text-md-center mt-5">
            {/* Logo and Tagline Section */}
            <Row className="d-flex flex-column align-items-center mb-4">
              <img
                src={image1}
                alt="logo"
                style={{
                  width: "90px",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
              <p className="text-xs text-gray-400">
                One-stop solution for all your brokerage-free rental needs
              </p>
            </Row>

            {/* Quick Links, Services, and Reach Us Sections */}
            <Row className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              {/* Quick Links Section */}
              <Col md={3} lg={2} className="mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Quick Links
                </h6>
                <p>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="/service"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Services
                  </a>
                </p>
                <p>
                  <a href="/blog" className="text-gray-400 hover:text-gray-200">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-400 hover:text-gray-200">
                    Projects
                  </a>
                </p>
              </Col>

              {/* Services Section */}
              <Col md={3} lg={2} className="mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Services
                </h6>
                <p>
                  <a href="#!" className="text-gray-400 hover:text-gray-200">
                    Paying Guest
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-400 hover:text-gray-200">
                    Flat and Houses
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-400 hover:text-gray-200">
                    Offices
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-400 hover:text-gray-200">
                    Shops and Godown
                  </a>
                </p>
              </Col>

              {/* Reach Us Section */}
              <Col md={4} lg={3} className="mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Reach Us
                </h6>
                <Row className="mb-1 mt-2">
                  <Col md={2}>
                    <i className="fas fa-phone me-3 text-white"></i>
                  </Col>
                  <Col>
                    <p className="text-gray-400">+91-8707727347</p>
                  </Col>
                </Row>
                <Row className="mb-1 mt-1">
                  <Col md={2}>
                    <i className="fas fa-envelope me-3 text-white"></i>
                  </Col>
                  <Col>
                    <p className="text-gray-400">hello@toletglobe.in</p>
                  </Col>
                </Row>
                <Row className="mb-1 mt-1">
                  <Col md={2}>
                    <i className="fas fa-home me-3 text-white"></i>
                  </Col>
                  <Col>
                    <p className="text-gray-400">
                      D1/122 Vipulkhand, Gomtinagar, Lucknow, Uttar Pradesh
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="text-center flex justify-between p-4 bg-black text-white border-t border-white">
          <a className="text-gray-400 hover:text-gray-200 fw-bold" href="/">
            © 2023 To-Let Globe -- Lucknow
          </a>
          <div className="flex space-x-4">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </footer>
    </Container>
  );
};
