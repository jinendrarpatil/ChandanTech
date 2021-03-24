import React from "react";
import "./Title.css";

const Title = () => {
  return ( 
    <div className= "container-fluid title">
    <div className="row">
    <div className="col-lg-6">
   <img className="img-fluid img-thumbnail rounded-circle img1" src="https://plsadaptive.s3.amazonaws.com/eco/images/channel_content/images/offshore_platform.jpg" alt="img1" />
   <img className="img-fluid img-thumbnail rounded-circle img2" src="https://www.bankinghub.eu/wp-content/uploads/sites/2/2015/04/solution.jpg" alt="img2"/>
   <img className="img-fluid img-thumbnail rounded-circle img3" src="https://static9.depositphotos.com/1000816/1237/i/600/depositphotos_12375114-stock-photo-handshake-with-map-of-the.jpg" alt="img3"/>
   </div>
   <div className="col-lg-6">
    <h1>Chandan Tech Solutions</h1>
    <h3> - Where Experience <br/>& <br/> Excellence meet.</h3>
  </div>
  </div>
</div>
   );
}
 
export default Title;