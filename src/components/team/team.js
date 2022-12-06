import React from "react";
import './team.css'
function Team(){
    return(<div className="team" id="team">
    <h2 className="team-heading">Meet our Team</h2>
    <span className="team-span">
    <img src={require("./image1.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Seshu Karthick
        </ h3 >
        <div className="team-text">Founder</div>
        <a href="https://www.linkedin.com/in/seshukarthick/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    
    </span>
    <span className="team-span">
    <img src={require("./image5.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        T.N.Rao
        </h3 >
        <div className="team-text">Investor</div>
        <a href="#" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image3.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Gireesh
        </h3>
        <div className="team-text">Developer</div>
        <a href="https://www.linkedin.com/in/gireeshredy
" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span><br/>
    <span className="team-span">
    <img src={require("./image2.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Dhanush Waran
        </h3>
        <div className="team-text">Designer
</div>
<a href="#" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/> </a>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./imag4.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Sachin
        </h3>
        <div className="team-text">Community</div>
      
        <a href="https://www.linkedin.com/in/sachin-s-5724841b4/" target="_blank"><img src={require('./linkedinlogo.png')} className="linkedin-logo"/></a>
    </span>
    </span>

    <span className="team-span">
    <img src={require("./image7.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Kiran
        </h3>
        <div className="team-text">Marketer</div>
        <a href="https://www.linkedin.com/in/kirangowtham/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span>
    
    </div>)
}
export default Team
