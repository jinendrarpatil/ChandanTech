import React from 'react';
import "./Industries.css";

function Industries(){
    return(
      <div className="container-fluid industries">
     <h1 id="industryTitle">Industries we serve</h1>
      <hr id="hrz" />
      <div id="vert"></div>

    <div className="container1">

    <div className="industry">
      <h3>Oil & Gas</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="https://sagemetering.com/wp-content/uploads/2017/01/Three-Oil-Pumps-c.jpg" alt="Oil & Gas"/>
      </div>
    </div>

    <div className="industry">
      <h3> FMCG</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="https://st4.depositphotos.com/13672908/30890/v/600/depositphotos_308904932-stock-illustration-fmcg-fast-moving-consumer-goods.jpg"  alt="FMCG"/>
      </div>
    </div>

    <div className="industry">
      <h3>Automobile</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
         <img src="https://www.plm.automation.siemens.com/media/global/ko/autonomous-vehicle-glossary_tcm72-46608.jpg"  alt="Automobile"/>
      </div>
    </div>

    <div className="industry">
      <h3>Steel</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
         <img src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_in/topics/mining-metals/2020/09/ey-steel-sector-of-india.jpg"  alt="Steel" />
      </div>
    </div>

    <div className="industry">
      <h3>Power Generation </h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="https://www.berthold.com/fileadmin/global/images/process-control/Power-Generation-Industry-Measurement-Solutions.jpg"  alt="Power Generation1"/>
      </div>
    </div>

    <div className="industry">
      <h3>Chemical & Process</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="http://aiautomation.co/wp-content/uploads/2015/07/1.5b.jpg"  alt="Chemical & Process"/>
      </div>
    </div>

    <div className="industry">
      <h3>Water & Waste </h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="https://www.otj247.com/static/uploads/1487315210.57_1.png"  alt="Water & Waste"/>
      </div>
    </div>

    <div className="industry">
      <h3>Metals & Mining</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
        <img src="/img/IndustryServe/metal and mining.jpg" alt="Metals & Mining"/>
      </div>
    </div>
  </div>
  </div>
)
}

export default Industries;