import './App.css';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header"
import FAQBlock from './Components/Main/FAQBlock/FAQBlock';
import InfoBlock from './Components/Main/InfoBlock/InfoBlock';
import ProxyBlock from './Components/Main/ProxyBlock/ProxyBlock';
import SupprotBlock from './Components/Main/SupportBlock/SupportBlock';
import TariffsBlock from './Components/Main/TariffsBlock/TariffsBlock';
import VideoBlock from './Components/Main/VideoBlock/VideoBlock';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <SupprotBlock/>
      <VideoBlock/>
      <InfoBlock/>
      <ProxyBlock/>
      <TariffsBlock/>
      <FAQBlock/>
      <Footer/>
    </div>
  );
}

export default App;
