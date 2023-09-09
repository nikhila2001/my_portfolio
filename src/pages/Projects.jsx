import { useEffect } from "react";
import { ProjectList } from "../helpers/ProjectList";
function Projects() {

  useEffect(() => {
    document.title = "Projects";
  },[]);

  return (
    <>
      {/* Parent Container Holds - Header, Cards, Modal*/}
      <div
        className="container"
      >
        {/* Header Section */}
        <header className="text-light text-center mb-4">
          <h1 className="border-bottom border-success border-4 p-2">
            Projects
          </h1>
          <p className="text-start">Check out some my work</p>
        </header>
        {/* Card Section */}
        <div className="row">
          {ProjectList.map((project) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4 "
              key={project.id}
            >
              {/* Image with data attributes to trigger the modal */}
              <div className="card bg-dark p-3 shadow">
                <div className="image-container">
                <img
                src={project.image}
                role="button"
                className="card-img-top img-fluid"
                style={{width:'100%',height:'180px'}}
                alt={project.title}
                data-bs-toggle="modal"
                data-bs-target={`#projectModal${project.id}`}
              />
                </div>
            
              <div className="card-body bg-secondary">
                <h5 className="card-title fw-bold">{project.title}</h5>
                {/* Action buttons */}
                <div className="card-actions d-flex justify-content-between ">
                  <a
                    href={project.Demo}
                    target="_blank"
                    className="btn btn-success fw-bold"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="btn btn-success fw-bold"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              </div>
            
            </div>
          ))}
        </div>
        {/* Modal structure */}
        {ProjectList.map((project) => (
          <div
            className="modal fade"
            id={`projectModal${project.id}`}
            key={`modal${project.id}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby={`projectModal${project.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content modal-bg ">
                <div className="modal-header">
                  {/* Modal title */}
                  <h5 className="modal-title" id={`projectModal${project.id}`}>
                    {project.title}
                  </h5>
                  {/* Modal close button */}
                  <button
                    type="button"
                    className="btn-close bg-light"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Modal image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                  {/* Project details */}
                  <p className="mt-2 font-monospace">
                    <b className="project-details">Description:</b>&nbsp; {project.description}
                  </p>
                  <p className="font-monospace">
                    <b className="project-details">Technologies:</b>&nbsp; {project.technologies}
                  </p>
                  <p className="font-monospace">
                    <b className="project-details">Learnings:</b>&nbsp; {project.learnings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
