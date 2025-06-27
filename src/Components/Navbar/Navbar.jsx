import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
export default function Navbar() {
    return (
    <>
        <header className={`fixed-top shadow-sm ${styles.customNav}`}>
            <nav className="navbar navbar-expand-lg px-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img
                    src="/Images/sunrise.png"
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-top"
                    style={{ borderRadius: "50%" }}
                    />
                    <span className="fw-bold" style={{ color: "#AD1457" }}>Shorouk</span>
                </Link>
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
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                        Projects
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/resume">
                        Resume
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
        </>
    );
};
