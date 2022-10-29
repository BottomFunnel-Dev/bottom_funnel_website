import React from "react";
import { Route, Routes } from "react-router-dom";
import { AlcoholDeliveryPage } from "./Components/alcohol-delivery/AlcoholDeliveryPage";
import { AndroidDevelopmentPage } from "./Components/AndroidDevelopmentPage/AndroidDevelopmentPage";
import Beautysection from "./Components/Beautyandcare/Beautysection";
import Dating from "./Components/Dating/Dating";
import { EcommerceComPage } from "./Components/EcommerceCom/EcommerceComPage";
import Educationpage from "./Components/education/Educationpage";
import { Fitness } from "./Components/Fitness/Fitness";
import { Flutter } from "./Components/Flutter/Flutter";
import { FoodDelivery } from "./Components/food-delivery/FoodDeliveryPage";
import { GameDevelopmentPage } from "./Components/Game-development/GameDevelopmentPage";
import Grocery from "./Components/Grocery/Grocery";
import { Ionic } from "./Components/Ionic/Ionic";
import { Iphonepage } from "./Components/Iphonedevelopmentpage/Iphonepage";
import OndemandHome from "./Components/OndemandHome/OndemandHome";
import { HomePage } from "./Components/Pages/Home/Home";
import SeoEmail from "./Components/Pages/SEO/SeoEmail";
import Seoguest from "./Components/Pages/SEO/Seoguest";
import Seolink from "./Components/Pages/SEO/Seolink";
import SeoLocal from "./Components/Pages/SEO/SeoLocal";
import SeoMain from "./Components/Pages/SEO/SeoMain";
import SeoPPC from "./Components/Pages/SEO/SeoPPC";
import SeoSEM from "./Components/Pages/SEO/SeoSEM";
import { Reactnative } from "./Components/Reactnative/Reactnative";
import { SeoDm } from "./Components/SeoDigitalmarketing/SeoDm";
import { SkillsComPage } from "./Components/skillsPageCom/SkillsComPage";
import Travel from "./Components/Travel/Travel";
import Videostreaming from "./Components/Videostreaming/Videostreaming";
import {
  angularjsData,
  backbonejsData,
  bigcommerceData,
  cakePHPData,
  codeigniterData,
  djangoData,
  DotnetData,
  drupalData,
  emberjsData,
  hiberateData,
  hubspotData,
  joomlaData,
  jqueryData,
  laravelData,
  mongodbData,
  msSQLData,
  mysqlData,
  nextjsData,
  nodejsData,
  phpData,
  postgresqlData,
  reactjsData,
  redisData,
  springBootData,
  svelteData,
  vuejsData,
  wixData,
  wooecommerceData,
  wordpressData,
} from "./Data/SkillsData";

export const ALLroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
      <Route path="/nodejs" element={<SkillsComPage allData={nodejsData} />} />
      <Route path="/php" element={<SkillsComPage allData={phpData} />} />
      <Route path="/dotnet" element={<SkillsComPage allData={DotnetData} />} />
      <Route
        path="/laravel"
        element={<SkillsComPage allData={laravelData} />}
      />
      <Route path="/django" element={<SkillsComPage allData={djangoData} />} />
      <Route
        path="/cakephp"
        element={<SkillsComPage allData={cakePHPData} />}
      />
      <Route
        path="/codeigniter"
        element={<SkillsComPage allData={codeigniterData} />}
      />
      <Route
        path="/reactjs"
        element={<SkillsComPage allData={reactjsData} />}
      />
      <Route
        path="/angular"
        element={<SkillsComPage allData={angularjsData} />}
      />
      <Route path="/vuejs" element={<SkillsComPage allData={vuejsData} />} />
      <Route
        path="/springboot"
        element={<SkillsComPage allData={springBootData} />}
      />
      <Route
        path="/hibernate"
        element={<SkillsComPage allData={hiberateData} />}
      />
      <Route
        path="/emberjs"
        element={<SkillsComPage allData={emberjsData} />}
      />
      <Route path="/jquery" element={<SkillsComPage allData={jqueryData} />} />
      <Route path="/nextjs" element={<SkillsComPage allData={nextjsData} />} />
      <Route
        path="/backbonejs"
        element={<SkillsComPage allData={backbonejsData} />}
      />
      <Route path="/svelte" element={<SkillsComPage allData={svelteData} />} />
      <Route
        path="/microsoftSQL"
        element={<SkillsComPage allData={msSQLData} />}
      />
      <Route
        path="/mongodb"
        element={<SkillsComPage allData={mongodbData} />}
      />
      <Route path="/mySQL" element={<SkillsComPage allData={mysqlData} />} />
      <Route
        path="/postgreSQL"
        element={<SkillsComPage allData={postgresqlData} />}
      />
      <Route path="/redis" element={<SkillsComPage allData={redisData} />} />
      <Route
        path="/wordpress"
        element={<SkillsComPage allData={wordpressData} />}
      />
      <Route path="/wix" element={<SkillsComPage allData={wixData} />} />
      <Route path="/joomla" element={<SkillsComPage allData={joomlaData} />} />
      <Route
        path="/hubspot"
        element={<SkillsComPage allData={hubspotData} />}
      />
      <Route
        path="/woo-commerce"
        element={<SkillsComPage allData={wooecommerceData} />}
      />
      <Route path="/drupal" element={<SkillsComPage allData={drupalData} />} />
      <Route
        path="/bigcommerce"
        element={<SkillsComPage allData={bigcommerceData} />}
      />

      <Route path="/beautycareapp" element={<Beautysection />} />
      <Route path="/digitalmarketing" element={<SeoDm />} />
      <Route path="/emailservices" element={<SeoEmail />} />
      <Route path="/food-delivery" element={<FoodDelivery />} />
      <Route path="/education" element={<Educationpage />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/ecommerce" element={<EcommerceComPage />} />
      <Route path="/gameDevelopment" element={<GameDevelopmentPage />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/videostreaming" element={<Videostreaming />} />
      <Route path="/dating" element={<Dating />} />
      <Route path="/alcohol" element={<AlcoholDeliveryPage />} />
    </Routes>
  );
};
