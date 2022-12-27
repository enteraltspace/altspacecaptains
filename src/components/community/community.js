import React from"react"
import "./community.css"
function Community(){
    return(<>
    <div className="community-div1">
        <h2 className="community-text">
            JOIN OUR COMMUNITY
        </h2>
        <a href=" https://discord.gg/ru6g942RKe" target="_blank"><button className="community-button">JOIN DISCORD</button></a>
    </div>
    <div className="community-div1">
        <img src={require("./circles.png")} className="community-img1"/>
    </div>
    <img src={require("./Captains-Tokenomics.png")}/>
    </>)
}
export default Community
