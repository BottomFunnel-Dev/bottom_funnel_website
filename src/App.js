import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SeoPPC from "./components/Pages/SEO/SeoPPC";
import SeoMain from './components/Pages/SEO/SeoMain'
import SeoLocal from './components/Pages/SEO/SeoLocal'
import Seoguest from './components/Pages/SEO/Seoguest'
import Seolink from './components/Pages/SEO/Seolink'
import SeoSEM from './components/Pages/SEO/SeoSEM'
// import { Seomainpage } from "./components/SEO/Seomainpage/Seomainpage";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/seo" element={<SeoMain/>} />
        <Route path="/local-seo" element={<SeoLocal/>} />
        <Route path="/seo-ppc" element={<SeoPPC/>} />
        <Route path="/seo-guest-post" element={<Seoguest/>} />
        <Route path="/seo-link-building" element={<Seolink/>} />
        <Route path="/seo-sem" element={<SeoSEM/>} />
        

      </Routes>
      {/* <Seomainpage/> */}
    </div>
  );
}

export default App;
