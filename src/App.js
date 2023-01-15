import './App.css';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header"
import FAQBlock from './Components/Main/FAQBlock/FAQBlock';
import InfoBlock from './Components/Main/InfoBlock/InfoBlock';
import ProxyBlock from './Components/Main/ProxyBlock/ProxyBlock';
import SupprotBlock from './Components/Main/SupportBlock/SupportBlock';
import TariffsBlock from './Components/Main/TariffsBlock/TariffsBlock';
import VideoBlock from './Components/Main/VideoBlock/VideoBlock';

function App(props) {
  return (
    <div className='wrapper'>
      <Header data = {props.data.header}/>
      <SupprotBlock data = {props.data.main.support}/>
      <VideoBlock data = {props.data.main.video}/>
      <InfoBlock data = {props.data.main.infoblock}/>
      <ProxyBlock data = {props.data.main.proxy}/>
      <TariffsBlock data = {props.data.main.tariffs}/>
      <FAQBlock data = {props.data.main.faq}/>
      <Footer datanav = {props.data.header} datafooter = {props.data.footer}/>
    </div>
  );
}

export default App;
