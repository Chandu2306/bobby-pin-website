import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./custom.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-2 bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold brand-text" href="#">
            Aura Clips
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center text-center">
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#manufacturing">
                  Manufacturing
                </a>
              </li>
              <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
                <a href="#contact" className="btn btn-primary btn-sm px-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section d-flex align-items-center text-center">
        <div className="container py-5">
          <h1 className="fw-bold hero-title">
            Premium Hair Clips & Pin Manufacturer
          </h1>
          <p className="hero-subtitle mt-3">
            Bulk Orders • Custom Designs • High Quality Materials
          </p>

          <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-primary px-4">Request Bulk Quote</button>
            <button className="btn btn-outline-light px-4">
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-5" id="products">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Bobby Pin Sizes</h2>
            <p className="text-muted">
              Available in multiple standardized lengths to meet retail and
              wholesale market requirements.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-4 text-center size-card">
                <h5 className="fw-semibold">45 mm</h5>
                <p className="text-muted small">
                  Compact size suitable for light hold and fine styling.
                </p>
                <span className="badge bg-dark">Standard Variant</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-4 text-center size-card">
                <h5 className="fw-semibold">50 mm</h5>
                <p className="text-muted small">
                  Balanced grip for everyday and retail use.
                </p>
                <span className="badge bg-dark">Most Popular</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-4 text-center size-card">
                <h5 className="fw-semibold">60 mm</h5>
                <p className="text-muted small">
                  Strong hold for thicker and longer hair.
                </p>
                <span className="badge bg-dark">High Grip</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-4 text-center size-card">
                <h5 className="fw-semibold">70 mm</h5>
                <p className="text-muted small">
                  Designed for professional and bulk applications.
                </p>
                <span className="badge bg-dark">Bulk Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="py-5 bg-light" id="manufacturing">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Partner With Us</h2>
            <p className="text-muted">
              Specialized manufacturing of high-quality bobby hair pins with
              precision and consistency.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center why-card">
                <div className="mb-3 fs-1 text-dark">✓</div>
                <h5 className="fw-semibold">Dedicated Bobby Pin Production</h5>
                <p className="text-muted small">
                  Focused exclusively on manufacturing bobby pins, ensuring
                  specialization and refined quality control.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center why-card">
                <div className="mb-3 fs-1 text-dark">⚙</div>
                <h5 className="fw-semibold">High-Strength Materials</h5>
                <p className="text-muted small">
                  Durable metal construction with strong grip and smooth finish
                  for long-lasting performance.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center why-card">
                <div className="mb-3 fs-1 text-dark">🏭</div>
                <h5 className="fw-semibold">Large-Scale Manufacturing</h5>
                <p className="text-muted small">
                  Capable of fulfilling bulk wholesale and distributor orders
                  with consistent quality standards.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center why-card">
                <div className="mb-3 fs-1 text-dark">🚚</div>
                <h5 className="fw-semibold">Reliable Supply & Delivery</h5>
                <p className="text-muted small">
                  Efficient production and dispatch processes to ensure timely
                  deliveries for all partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h3>Looking for Bulk Orders?</h3>
          <p className="mb-4">
            Contact us today for factory-direct pricing and customization.
          </p>
          <a href="#contact" className="btn btn-light px-4">
            Contact Sales Team
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <h2 className="text-center mb-4 section-heading">Get In Touch</h2>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Tell us your quantity requirement..."
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section text-center py-3">
        © 2026 Aura Clips Manufacturing Co.
      </footer>
    </>
  );
}

function ProductCard({ title }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="card shadow-sm h-100 border-0">
        <div className="product-image"></div>
        <div className="card-body text-center">
          <h6 className="card-title">{title}</h6>
          <p className="card-text small">
            Available in multiple colors & finishes.
          </p>
          <button className="btn btn-outline-dark btn-sm">Request Price</button>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="p-4 bg-white shadow-sm rounded h-100">✓ {text}</div>
    </div>
  );
}

export default App;
