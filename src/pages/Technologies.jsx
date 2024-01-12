import { useEffect } from "react";

function Technologies() {
  const technologies = [
    {
      key: "1",
      title: "HTML",
      logo: "/assets/logos/html5-logo-31813.png",
    },
    {
      key: "2",
      title: "CSS",
      logo: "/assets/logos/css.png",
    },
    {
      key: "3",
      title: "JavaScript",
      logo: "/assets/logos/javascript.png",
    },
    {
      key: 4,
      title: "React",
      logo: "/assets/logos/react.png ",
    },
    {
      key: 5,
      title: "BootStrap",
      logo: "/assets/logos/bootstrap.png",
    },
    {
      key: 6,
      title: "Material UI",
      logo: "/assets/logos/material-ui.png",
    },
    {
      key: 7,
      title: "Git",
      logo: "/assets/logos/git.png",
    },
    {
      key: 8,
      title: "Redux Toolkit",
      logo: "/assets/logos/redux-logo.jpg",
    },
  ];

  useEffect(() => {
    document.title = "Technologies";
  }, []);

  return (
    <>
      <div className="container ">
        <header className="d-block  text-light text-center mt-5">
          <h3 className="custom-border p-2">
            Technologies
          </h3>
          <p className="mb-5">These are the technologies I've worked with</p>
        </header>

        <div className=" techno-container row  justify-content-center ">
          {technologies.map((techno) => (
            <div
              className="col-md-4 col-sm-6 col-6 col-lg-3 text-center "
              key={techno.key}
            >
              <img
                className="img-fluid gradient-border p-2"
                src={techno.logo}
                alt={techno.title}
                style={{ width: "90px", height: "90px" }}
              />
              <small className="text-light">{techno.title}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Technologies;
