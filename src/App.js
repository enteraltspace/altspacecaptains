
import './App.css';
import Navbar from"./components/Navbar/navbar.js"
import Welcome from './components/welcome/welcome';
import Team from './components/team/team.js';
import Faq from './components/faq/faq';
import Roadmap from './components/roadmap/roadmap';

import About from './components/aboutus/aboutus';
import Footer from './components/footer/footer';
import Community from './components/community/community';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
function App() {
  function getLibrary(provider){
    return new Web3(provider)
  }
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar/>
      <Welcome/>
      <About/>
      <Roadmap />
      <Community />
      <Team />
      <Faq/>
      <Footer/>
      </Web3ReactProvider>
      
      
    </div>
  );
}

export default App;
