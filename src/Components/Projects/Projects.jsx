import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Projects.css'
export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with HTML, CSS.",
      image: "/Images/portoflio.png",
      github: "https://github.com/shorouk1912/My-portfolio.git",
    },
    {
      title: "Flowers",
      description: "Responsive store front with cart and product filters.",
      image: "/Images/flower.png",
      github: "https://github.com/shorouk1912/flowers.git",
    },
    {
      title: "Food",
      description: "Healthy food UI website.",
      image: "/Images/food.png",
      github: "https://github.com/shorouk1912/healty-food.git",
    },
    {
      title: "Houses",
      description: "Real estate landing page.",
      image: "/Images/houses.png",
      github: "https://github.com/shorouk1912/houses.git",
    },
    {
      title: "Bootstrap Site",
      description: "Website using Bootstrap only.",
      image: "/Images/bootstrap.png",
      github: "https://github.com/shorouk1912/bootstrap-site",
    },
    {
      title: "Shoes",
      description: "E-commerce landing page for shoes.",
      image: "/Images/shoes.png",
      github: "https://github.com/shorouk1912/shoes.git",
    },
  ];

  return (
    <section className="py-5 bg-white px-3 m-3" id="projects">
      <div className="container position-relative">
        <h2 className="text-center mb-5 fw-bold project-title">My Projects</h2>

        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {projectList.map((project, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row g-4 align-items-center justify-content-center text-center text-md-start flex-column flex-md-row">
                  <div className="col-12 col-md-6">
                    <img
                      src={project.image}
                      className="img-fluid rounded shadow"
                      alt={project.title}
                      style={{
                        maxHeight: "350px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <h3 className="fw-bold project-heading mb-3">
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark mt-2"
                    >
                      <i className="fab fa-github me-2"></i> View on GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon arrow-pink"></span>
          </button>
          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon arrow-pink"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
