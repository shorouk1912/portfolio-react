
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
export default function Navbar() {
    return (
    <>
        <header className={`fixed-top shadow-sm ${styles.customNav}`}>
            <nav className="navbar navbar-expand-lg px-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img
                    src="/Images/sunrise.png"
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-top"
                    style={{ borderRadius: "50%" }}
                    />
                    <span className="fw-bold" style={{ color: "#AD1457" }}>Shorouk</span>
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
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#home">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#projects">
                        Projects
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#resume">
                        Resume
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
        </>
    );
};
