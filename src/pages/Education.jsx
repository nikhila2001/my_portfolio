import { useEffect } from "react";
function Education() {
  useEffect(() => {
    document.title = "Education";
  }, []);

  return (
    <>
      <div className="container">
        <header className="text-light text-center mt-5">
          <h1 className=" border-4 border-bottom border-success p-2">
            Education
          </h1>
          <p>These are my Education Details.</p>
        </header>

        <div className="card m-3 shadow ">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/logos/idol.jpeg"
                className="img-fluid rounded-start"
                alt="IDOL MUMBAI UNIVERSITY"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  IDOL Mumbai University - Kalina Campus
                </h5>
                <p className="card-text text-success">
                  Master of Science in Computer Science
                </p>
                <p>Duration 2 Years</p>
                <p className="card-text">
                  <small className="text-muted">
                    November 2022 - June 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-3 shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/logos/mu-logo.jpeg"
                className="img-fluid rounded-start"
                alt="MUMBAI UNIVERSITY - KALINA CAMPUS"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Mumbai University - Kalina Campus
                </h5>
                <p className="card-text text-success">
                  Bachelor of Science in Computer Science
                </p>
                <p>Duration 3 Years</p>
                <p className="card-text">
                  <small className="text-muted">August 2019 - June 2022</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
