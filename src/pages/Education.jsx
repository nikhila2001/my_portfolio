import { useEffect } from "react";
function Education() {
  useEffect(() => {
    document.title = "Education";
  }, []);

  return (
    <>
      <div className="container">
        <header className="text-light text-center">
          <h1 className=" custom-border p-2">
            Education
          </h1>
          <p>These are my Education Details.</p>
        </header>
        
        <main className="d-flex flex-column  education-section mt-4 mx-3" style={{color:"#61A5C2"}}>
        {/* MSC CARD CONTAINER */}
        <div className="row mb-3 msc-container border rounded-3" style={{maxWidth:"640px"}} >
          {/* idol logo image */}
        <img src="/assets/logos/idol.jpeg" className=" col-md-3 col-xs-auto p-0 img-fluid" alt="idol logo"  />
        {/* MSC INFO */}
        <div className=" col-xs-auto col-md-auto p-3">
          <h6 style={{color:"#89C2D9"}}>Masters of Science in Computer Science</h6>
          <p className="mb-0">College Name: IDOL Mumbai University- Kalina campus</p>
          <small>Duration: 2 years</small>
          <small className="d-block">November 2022 - June 2024</small>
        </div>
        </div>

        {/* BSC CARD CONTAINER */}
        <div className="row  msc-container border rounded-3" style={{maxWidth:"640px"}} >
          {/* MU logo image */}
        <img src="/assets/logos/mu-logo.jpeg" className=" col-md-3 col-xs-auto p-0 img-fluid" alt="idol logo"  />
        {/* BSC INFO */}
        <div className=" col-xs-auto col-md-auto p-3">
          <h6 style={{color:"#89C2D9"}}>Bachelors of Science in Computer Science</h6>
          <p className="mb-0">College Name: BNN College - Mumbai University</p>
          <small className="d-block">Duration: 3 years</small>
          <small>August 2019 - June 2022</small>
          <small className="ms-5" style={{color:"#89C2D9"}}>CGPA - 9.02</small>
        </div>
        </div>

        </main>
        
      </div>
    </>
  );
}
export default Education;
