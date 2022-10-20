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
import { NodejsPage } from "./components/Nodejs/nodejs";
import MainFooter from "./components/FooterSection/MainFooter";
import { SeoDm } from "./components/SeoDigitalmarketing/SeoDm";
import SeoEmail from "./components/Pages/SEO/SeoEmail";
import { PhPSkillsPage } from "./components/php/PhPSkillsPage";
import { DotNetPage } from "./components/dotnet/DotNetPage";
import { FoodDelivery } from "./components/food-delivery/FoodDeliveryPage";
import Beautysection from "./components/Beautyandcare/Beautysection";
// import { Seomainpage } from "./components/SEO/Seomainpage/Seomainpage";

import { angularjsData, backbonejsData, cakePHPData, codeigniterData, djangoData, DotnetData, emberjsData, hiberateData, jqueryData, laravelData, mongodbData, msSQLData, mysqlData, nextjsData, nodejsData, phpData, postgresqlData, reactjsData, redisData, springBootData, svelteData, vuejsData } from "./Data/SkillsData";
import { SkillsComPage } from "./components/skillsPageCom/SkillsComPage";
import Educationpage from "./components/education/Educationpage";
import OndemandHome from "./components/OndemandHome/OndemandHome";
import { Fitness } from "./components/Fitness/Fitness";
import { GameDevelopmentPage } from "./components/Game-development/GameDevelopmentPage";
import { EcommerceComPage } from "./components/EcommerceCom/EcommerceComPage";
import Grocery from "./components/Grocery/Grocery";
import Travel from "./components/Travel/Travel";
import Videostreaming from "./components/Videostreaming/Videostreaming";

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
        <Route path="/ondemandHomeServices" element={<OndemandHome/>} />
        <Route path="/nodejs" element={<SkillsComPage allData={nodejsData}/>} />
        <Route path="/php" element={<SkillsComPage allData={phpData}/>} />
        <Route path="/dotnet" element={<SkillsComPage allData={DotnetData}/>} />
        <Route path="/laravel" element={<SkillsComPage allData={laravelData}/>} />
        <Route path="/django" element={<SkillsComPage allData={djangoData}/>} />
        <Route path="/cakephp" element={<SkillsComPage allData={cakePHPData}/>} />
        <Route path="/codeigniter" element={<SkillsComPage allData={codeigniterData}/>} />
        <Route path="/reactjs" element={<SkillsComPage allData={reactjsData}/>} />
        <Route path="/angular" element={<SkillsComPage allData={angularjsData}/>} />
        <Route path="/vuejs" element={<SkillsComPage allData={vuejsData}/>} />
        <Route path="/springboot" element={<SkillsComPage allData={springBootData}/>} />
        <Route path="/hibernate" element={<SkillsComPage allData={hiberateData}/>} />
        <Route path="/emberjs" element={<SkillsComPage allData={emberjsData}/>} />
        <Route path="/jquery" element={<SkillsComPage allData={jqueryData}/>} />
        <Route path="/nextjs" element={<SkillsComPage allData={nextjsData}/>} />
        <Route path="/backbonejs" element={<SkillsComPage allData={backbonejsData}/>} />
        <Route path="/svelte" element={<SkillsComPage allData={svelteData}/>} />
        <Route path="/microsoftSQL" element={<SkillsComPage allData={msSQLData}/>} />
        <Route path="/mongodb" element={<SkillsComPage allData={mongodbData}/>} />
        <Route path="/mySQL" element={<SkillsComPage allData={mysqlData}/>} />
        <Route path="/postgreSQL" element={<SkillsComPage allData={postgresqlData}/>} />
        <Route path="/redis" element={<SkillsComPage allData={redisData}/>} />

        <Route path="/beautycareapp" element={<Beautysection />} />
        <Route path="/digitalmarketing" element={<SeoDm />} />
        <Route path="/emailservices" element={<SeoEmail />} />
       
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/education" element={<Educationpage/>} />
        <Route path="/fitness" element={<Fitness/>} />
        <Route path="/ecommerce" element={<EcommerceComPage/>} />
        <Route path="/gameDevelopment" element={<GameDevelopmentPage/>} />
        <Route path="/grocery" element={<Grocery/>} />
        <Route path="/travel" element={<Travel/>} />
        <Route path="/videostreaming" element={<Videostreaming/>} />





      </Routes>
      {/* <Seomainpage/> */}
    </div>
  );
}

export default App;
