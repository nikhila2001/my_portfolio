import { TypeAnimation } from 'react-type-animation';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Github, Download } from "react-bootstrap-icons";
import { useEffect } from "react";


function Home() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <div className="intro-section" id='home'>
        <div className="row g-5">
          {/* COL-1 PROFILE SECTION */}
          <div className="profile-container col-md-auto col-sm-12 text-center m-0">
            <img
              src="assets/profile_pic.png"
              alt="profile"
              className="profile-pic img-fluid"
            />
          </div>
          {/* COL-2 INTRODUCTION SECTION */}
          <div className="col-md-auto col-sm-12 text-light text-center m-auto">
            <h1 className="display-4 mb-0">Hi, I am Nikhila Sargam</h1>
            {/* TYPEWRITER EFFECT USING REACT TYPE ANIMATION */}
            <div className="typewriter-effect text-center">
              <TypeAnimation
                sequence={[
                  "A Student",
                  1000,
                  "An Aspiring Frontend Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                
              />
            </div>
            {/* SOCIAL MEDIA LINKS */}
         <div className="social-media-container mt-4">
          {/* GMAIL LINK */}
          <OverlayTrigger
          placement='top'
          overlay={<Tooltip id='tooltip'>Gmail</Tooltip>}
          >  
           <a href="mailto:nsargam58@gmail.com" target='_blank'><img src="assets/logos/gmail.png" alt="gmail" /></a>
          </OverlayTrigger>

          {/* LINKEDIN LINK */}
          <OverlayTrigger
          placement='top'
          overlay={<Tooltip id='tooltip'>LinkedIn</Tooltip>}
          >
          <a href="https://www.linkedin.com/in/nikhilasargam/" target='_blank'><img src="assets/logos/linkedin.png" alt="linkedIn" /></a>
          </OverlayTrigger>

          {/* GITHUB LINK */}
          <OverlayTrigger
          placement='top'
          overlay={<Tooltip id='tooltip'>GitHub</Tooltip>}
          >
          <a href="https://github.com/nikhila2001" target='_blank'><Github className='text-light fs-3 github-icon'/></a>
          </OverlayTrigger>

          {/* FRONTEND MENTOR LINK */}
          <OverlayTrigger
          placement='top'
          overlay={<Tooltip>Frontend-mentor</Tooltip>}
          >
          <a href="https://www.frontendmentor.io/profile/nikhila2001" target='_blank'><img src="assets/logos/frontend-mentor.jpg" className='border-0 rounded' alt="Frontend-Mentor" style={{maxWidth:"25px"}} /></a>
          </OverlayTrigger>

          {/* RESUME BUTTON */}
          <OverlayTrigger
          placement='top'
          overlay={<Tooltip id='tooltip'>Download Resume</Tooltip>}
          >

          <div className='resume-btn d-inline-block mx-1'>
          <a
          type='button'
          className='border-0 rounded '
          href='assets/nikhila-s-resume.pdf'
          download="Nikhila_Resume"
          >Resume <Download className='fs-6'/> </a>
          </div>
          </OverlayTrigger>
         
         
         </div>
          
            
          </div>
        </div>
        
      </div>


    </>
  );
}
export default Home;
