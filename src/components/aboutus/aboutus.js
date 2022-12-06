import './about.css'

const About=()=>{
    return (
        <>
        <h2 className='about-heading' >ABOUT</h2> 
        <br/>  
        <div className='part1' id='about'>
        <div className='img1'><img src={require('./image2.gif?auto=compress')} className='allimg1'/><img src={require('./image3.gif?auto=compress')} className='allimg1'/></div>
        <div className='img2'><img src={require('./image1.gif?auto=compress') } className='allimg' /><img src={require('./image4.gif?auto=compress') } className='allimg' /></div>
        
        </div>
       
        <div className="part2">
        <div className='about-text'> ALT Space is a parallel universe that has unique characters called Captains, Champs, Cartoons and more. You can unlock characters by minting them, and start collaborating for your Web3 initiatives in multiple ways.
<br/><br/>
The holders of ALT Space Captains NFTs represent experienced players in Web3 ecosystem. They will have special privileges to interact, hire talent, collaborate and network with people who share a similar vision.
<br/><br/>
Whether you manage a Web3 product, a service startup, a blockchain company, or a de-fi solution, you can grab our Captains NFT to engage with similar players in the ALT Space.
</div>
</div>
   
</>
        
    )

}
export default About;

