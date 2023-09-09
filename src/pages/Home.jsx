import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <div className=" container row d-flex justify-content-center align-items-center text-align-center">
        <div className="col-md-auto col-xs">
          {/* PROFILE PIC */}
          <img
            className="img-fluid img-thumbnail profile mx-auto d-block my-4"
            src="assets/profile_pic.png"
            alt="profile"
          />
        </div>
        {/* INTRODUCTION */}

        <div className="col w-100 text-light">
          <h1 className="display-4">Hi, I'm Sargam Nikhila</h1>
          <h5 className="mb-4">
            An Aspiring Frontend developer with a passion of learning and
            creating.
          </h5>
          {/* SOCIAL MEDIA LINKS */}

          <div className="custom-row d-flex justify-content-space-between align-items-center">
            <div className="col-4 ">
              <a
                href="https://github.com/nikhila2001"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="github"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <h1>
                  <Github color="white" size={40} />
                </h1>
              </a>
            </div>
            <div className="col-4">
              <a
                href="https://www.linkedin.com/in/nikhila-sargam-6181b3239/"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="linkedIn"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <h1>
                  <Linkedin color="white" size={40} />
                </h1>
              </a>
            </div>

            <div className="col">
              <a
                href="mailto:nsargam58@gmail.com"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Gmail"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>
                  <Envelope color="white" size={40} />
                </h1>
              </a>
            </div>

            <div className="col ms-3">
              <a
                href="https://www.frontendmentor.io/profile/nikhila2001"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/logos/frontend-mentor-logo.png"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Frontend-Mentor"
                  alt="frontend-mentor"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
            {/* RESUME BUTTON */}

            <a
              className="btn resume-btn mx-4 rounded-2 text-nowrap fw-bold mt-1"
              rel="noopener noreferrer"
              type="button"
              href="/assets/nikhila_resume.pdf"
              download="nikhila_resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
