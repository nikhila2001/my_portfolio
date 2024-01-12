import { TypeAnimation } from 'react-type-animation';
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
      <main className="intro-section">
        <div className="row g-5">
          {/* COL-1 PROFILE SECTION */}
          <div className="col-md-auto col-sm-12 text-center">
            <img
              src="assets/profile_pic.png"
              alt="profile"
              className="profile img-fluid"
            />
          </div>
          {/* COL-2 INTRODUCTION SECTION */}
          <div className="col-md-auto col-sm-12 text-light text-center m-auto">
            <h1 className="display-4">Hi, I am Nikhila Sargam</h1>
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
          </div>
        </div>
      </main>


    </>
  );
}
export default Home;
