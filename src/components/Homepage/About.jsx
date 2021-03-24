import React from "react";
import "./About.css";
import recentProjects from "./recentProjects";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
    <div className="col-lg-6 about">
        <h3>We Think</h3>
        <h2>Innovative</h2>
        <p> We, Chandan Tech Solutions Pvt Ltd (ChandanTech) is an innovating firm
          incorporated with the main objective of providing ideas related to
          Automation Sector of Plant Design Engineering & Installation and
          Material Planning using upgraded 3D software’s. ChandanTech provides
          an integrated design environment for plant construction that defines
          and manages the 3D plant model in PDMS, PDS and SP3D and other
          modelling software. ChandanTech provides 3D Modelling services with
          additional to Stress Analysis Piping Stress Analysis Structure, Stress
          Analysis Equipment, Reference Data customization, Report
          Customization, Symbol Customization, Drawing customization, Training
          on Smart Plant 3D Modelling.
          <br />
          <h6>
            <a href="https://www.incimages.com/uploaded_files/image/1920x1080/getty_636032898_200013332000928071_312931.jpg">
              Read more >
            </a>
          </h6>
        </p>
      </div>
      
      <div className="col-lg-6 recentProject">
      <div className="vertical"></div>
      <h1>~ Recent Projects ~</h1>
        <a href="">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
              
                <img className="d-block" 
                  style={{width:"500px", height:"320px"}}
                  src={recentProjects[0].src}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block" style={{width:"500px", height:"320px"}}
                  src={recentProjects[1].src}
                  alt="Second slide"
                  
                />
              </div>
              <div className="carousel-item">
                <img className="d-block" style={{width:"500px", height:"320px"}}
                  src= {recentProjects[2].src}
                  alt="Third slide"
                                  />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </a>
        <h6>
          <a href="/sections/company.html">Read more> </a>
        </h6>
      </div>
      </div>
      </div>
    
  );
}

export default About;
