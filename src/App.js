import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SeoPPC from "./components/Pages/SEO/SeoPPC";
import SeoMain from "./components/Pages/SEO/SeoMain";
import SeoLocal from "./components/Pages/SEO/SeoLocal";
import Seoguest from "./components/Pages/SEO/Seoguest";
import Seolink from "./components/Pages/SEO/Seolink";
import SeoSEM from "./components/Pages/SEO/SeoSEM";
import { Flutter } from "./components/Flutter/Flutter";
import { Ionic } from "./components/Ionic/Ionic";
import { Iphonepage } from "./components/Iphonedevelopmentpage/Iphonepage";
import { Reactnative } from "./components/Reactnative/Reactnative";
import { AndroidDevelopmentPage } from "./components/AndroidDevelopmentPage/AndroidDevelopmentPage";
import OndemandHome from "./components/Pages/SolutionPages/OndemandHome";
import { NodejsPage } from "./components/Nodejs/nodejs";
import MainFooter from "./components/FooterSection/MainFooter";
import { SeoDm } from "./components/SeoDigitalmarketing/SeoDm";
import SeoEmail from "./components/Pages/SEO/SeoEmail";
import { PhPSkillsPage } from "./components/php/PhPSkillsPage";
import { DotNetPage } from "./components/dotnet/DotNetPage";
import { FoodDelivery } from "./components/food-delivery/FoodDeliveryPage";
import Beautysection from "./components/Beautyandcare/Beautysection";
// import { Seomainpage } from "./components/SEO/Seomainpage/Seomainpage";

import { nodejsData } from "./Data/SkillsData";
import { SkillsComPage } from "./components/skillsPageCom/SkillsComPage";
import Educationpage from "./components/education/Educationpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo" element={<SeoMain />} />
        <Route path="/local-seo" element={<SeoLocal />} />
        <Route path="/seo-ppc" element={<SeoPPC />} />
        <Route path="/seo-guest-post" element={<Seoguest />} />
        <Route path="/seo-link-building" element={<Seolink />} />
        <Route path="/seo-sem" element={<SeoSEM />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/ionic" element={<Ionic />} />
        <Route path="/ios" element={<Iphonepage />} />
        <Route path="/reactNative" element={<Reactnative />} />
        <Route path="/android" element={<AndroidDevelopmentPage />} />
        <Route path="/ondemandHomeServices" element={<OndemandHome />} />
        <Route path="/nodejs" element={<NodejsPage/>} />
        <Route path="/beautycareapp" element={<Beautysection />} />
        <Route path="/digitalmarketing" element={<SeoDm />} />
        <Route path="/emailservices" element={<SeoEmail />} />
        <Route path="/php" element={<PhPSkillsPage />} />
        <Route path="/dotnet" element={<DotNetPage />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        {/* <Route path="/education" element={<Educationpage/>} /> */}




      </Routes>
      {/* <Seomainpage/> */}
    </div>
  );
}

export default App;
