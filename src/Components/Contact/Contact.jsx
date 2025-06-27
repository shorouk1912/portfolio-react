import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xdkzyazg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="text-center m-5">
          <h2 className="fw-bold text-pink">Let's Work Together</h2>
        </div>

        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="bg-white p-4 shadow rounded">
              <h4 className="mb-4 text-pink">Contact Info</h4>
              <p className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <a
                  href="mailto:shorouktaha19121998@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  shorouktaha19121998@gmail.com
                </a>
              </p>
              <p className="d-flex align-items-center">
                <MdLocationOn className="me-2 text-danger" />
                Mansoura, Egypt
              </p>
              <p className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-success" />
                +201032977116
              </p>
              <div className="mt-4">
                <h4 className="text-pink">Social Info</h4>
                <a
                  href="https://github.com/"
                  className="me-3 text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="www.linkedin.com/in/shorouk-taha1912"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="bg-white p-4 shadow rounded">
              <h4 className="mb-4">Send a Message</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-pink text-black w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {/* Success Message */}
              {success && (
                <div className="alert alert-success mt-3" role="alert">
                  ✅ Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
