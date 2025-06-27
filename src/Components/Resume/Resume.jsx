import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="py-5 resume-section" id="resume">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-pink mt-2">About Me</h2>

        {/* Work Experience */}
        <div className="mb-5">
          <h4 className="text-pink fw-bold mb-3">Work Experience</h4>

          <div className="mb-4">
            <h5 className="fw-bold">
              Web Developer - National Telecommunication Institute
            </h5>
            <p className="text-muted">El-Mansoura | 09/2024 — 11/2024</p>
            <p>
              My role during the training was to work on multiple projects, and
              the instructor helped me channel my skills effectively, allowing
              me to innovate and create solutions.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">
              Career Development - National Telecommunication Institute
            </h5>
            <p className="text-muted">El-Mansoura | 11/2024 — 2/2025</p>
            <p>
              My training focused on enhancing soft skills, personal branding,
              and preparing for the job market. I gained experience in CV
              writing, communication, and how to present myself professionally
              in interviews.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Front-End Developer - Azzrak</h5>
            <p className="text-muted">El-Mansoura | 07/2024 — 09/2024</p>
            <p>
              Completed a two-month online training program where I watched
              videos, applied what I learned, and worked on tasks assigned to
              me.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">
              Customer Service Representative - New Horizons
            </h5>
            <p className="text-muted">El-Mansoura | 03/2023 — 07/2024</p>
            <p>
              My role was to assist customers in meeting their needs and
              providing the necessary support.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h4 className="text-pink fw-bold mb-3">Education</h4>
          <h5 className="fw-bold">B.Sc. in Surveying, Mapping and GIS</h5>
          <p className="text-muted">
            Faculty of Arts, Mansoura University | 2017 – 2021
          </p>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-pink fw-bold mb-3">Skills</h4>
          <ul className="list-inline d-flex flex-wrap gap-2">
            <li className="skill-tag">
              <FaHtml5 className="me-1" /> HTML
            </li>
            <li className="skill-tag">
              <FaCss3Alt className="me-1" /> CSS
            </li>
            <li className="skill-tag">
              <FaJs className="me-1" /> JavaScript
            </li>
            <li className="skill-tag">
              <FaReact className="me-1" /> React
            </li>
            <li className="skill-tag">
              <FaBootstrap className="me-1" /> Bootstrap
            </li>
            <li className="skill-tag">
              <SiTailwindcss className="me-1" /> Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
