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
        id="projects"
      >
        {/* Header Section */}
        <header className="text-light text-center ">
          <h3 className="text-center mt-2">Check out some my work</h3>
        </header>
        {/* Card Section */}
        <div className="row">
          {ProjectList.map((project) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4 "
              key={project.id}
            >
              {/* Image with data attributes to trigger the modal */}
              <div className="card project-card p-2 ">
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
            
              <div className="card-body">
                <h5 className="card-title  text-center" style={{color:"#61A5C2"}}>{project.title}</h5>
                {/* Action buttons */}
                <div className="card-actions d-flex justify-content-between ">
                  <a
                    href={project.Demo}
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="btn"
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
            <div className="modal-dialog modal-dialog-centered" style={{maxWidth:"400px"}}>
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
                    className="img-fluid border-0 rounded"
                     
                  />
                  {/* Project details */}
                  <p className="mt-4 font-monospace">
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
