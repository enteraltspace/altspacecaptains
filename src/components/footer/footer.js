import React from "react";
import "./footer.css"
function Footer() {
    const about=()=>{
        let ele=document.getElementById("about")
            if (ele!=null) {
                console.log(ele)
                ele.scrollIntoView({block: "center", inline: "center"})
            }
      }
      const faq=()=>{
        let ele=document.getElementById("faq")
            if (ele!=null) {
                console.log(ele)
                ele.scrollIntoView({block: "center", inline: "center"})
            }
      }
      const team=()=>{
        let ele=document.getElementById("team")
            if (ele!=null) {
                console.log(ele)
                ele.scrollIntoView({block: "center", inline: "center"})
            }
      }
      const home=()=>{
        let ele=document.getElementById("home")
            if (ele!=null) {
                console.log(ele)
                ele.scrollIntoView({block: "center", inline: "center"})
            }
      }
    return (<>
        <footer className="footer-basic">
            <div class="social"><a href="https://discord.gg/ru6g942RKe" target="_blank">
                <img src={require('./discord.png')}/>
            </a>
            <a href="https://twitter.com/enteraltspace" target="_blank"> <img src={require('./twitter.png')}/>
                </a></div>
            <ul class="list-inline">
                <li class="list-inline-item" onClick={home}><a href="#">Home</a></li>
                <li class="list-inline-item" onClick={about}><a href="#">About</a></li>
                <li class="list-inline-item" onClick={home}><a href="#">Mint</a></li>
                <li class="list-inline-item" onClick={team}><a href="#">Team</a></li>
                <li class="list-inline-item" onClick={faq}><a href="#">FAQ</a></li>
                <li class="list-inline-item"><a onClick={faq}>FAQ</a></li>
            </ul>
            <p class="copyright">©Alt Space 2022</p>
        </footer>

    </>)
}
export default Footer
