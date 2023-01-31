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
        <div className='about-text'>
        <p>At ALT Space, you will find exclusive token-gated communities for Web3 founders and developers. You gain entry by minting the necessary NFTs - Captains, Creators, Champs, and more.</p>
        <p>The Captains are the ones who are passionate about building exciting products and solutions. They look out for opportunities to innovate, and device business plans around them.</p>
        <p>The holders of ALT Space Captains NFTs become part of an exclusive Web3 community to grow their projects or startups. They have the privilege to showcase their work, hire talent, collaborate and network with others.</p>
        <p>Whether you manage a Web3 product, a service startup, a blockchain company, or a de-fi solution, you can grab our Captains NFT to engage with similar players in the ALT Space.</p>
</div>
</div>
   
</>
        
    )

}
export default About;

