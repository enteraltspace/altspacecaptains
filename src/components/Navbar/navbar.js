import React from "react";
import "./navbar.css";
import Connect from "./connectbutton";
import Onramper from "../onramper/onramper";
export default function Navbar() {
  const about = () => {
    let ele = document.getElementById("about");
    if (ele != null) {
      ele.scrollIntoView({ block: "center", inline: "center" });
    }
  };
  const faq = () => {
    let ele = document.getElementById("faq");
    if (ele != null) {
      ele.scrollIntoView({ block: "center", inline: "center" });
    }
  };
  const team = () => {
    let ele = document.getElementById("team");
    if (ele != null) {
      ele.scrollIntoView({ block: "center", inline: "center" });
    }
  };
  const home = () => {
    let ele = document.getElementById("home");
    if (ele != null) {
      ele.scrollIntoView({ block: "center", inline: "center" });
    }
  };
  return (
    <>
      <div>
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" />
          <label></label>
          <span className="sl-container">
            <img className="sl-logo" src={require("./logo.png")} alt="" />
          </span>
          <ul>
            <Connect />
            <Onramper />
            <li>
              <a href="http://enteraltspace.com/" target="_blank">
                Company
              </a>
            </li>
            <li>
              <a onClick={faq}>FAQ</a>
            </li>
            <li>
              <a onClick={team}>Team</a>
            </li>
            <li>
              <a onClick={home}>Mint</a>
            </li>
            <li>
              <a onClick={about}>About</a>
            </li>
            <li>
              <a onClick={home}>Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
