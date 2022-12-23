import React from "react";
import { Route, Routes } from "react-router-dom";
import { AlcoholDeliveryPage } from "./components/alcohol-delivery/AlcoholDeliveryPage";
import { AndroidDevelopmentPage } from "./components/AndroidDevelopmentPage/AndroidDevelopmentPage";
import Beautysection from "./components/Beautyandcare/Beautysection";
import Cannabis from "./components/CannabisPage/Cannabis";
import Dating from "./components/Dating/Dating";
import { EcommerceComPage } from "./components/EcommerceCom/EcommerceComPage";
import Educationpage from "./components/education/Educationpage";
import { Fitness } from "./components/Fitness/Fitness";
import { FlutterAppDevelopment } from "./components/FlutterAppDevelopment/FlutterAppDevelopment";
import { FoodDelivery } from "./components/food-delivery/FoodDeliveryPage";
import Grocery from "./components/Grocery/Grocery";
import { Ionic } from "./components/Ionic/Ionic";
import { IOSAppDevelopmentPage } from "./components/IOSAppDevelopmentPage/IOSAppDevelopmentPage";
import OndemandHome from "./components/OndemandHome/OndemandHome";
import { HomePage } from "./components/Pages/Home/Home";
import SeoEmail from "./components/Pages/SEO/SeoEmail";
import Seoguest from "./components/Pages/SEO/Seoguest";
import Seolink from "./components/Pages/SEO/Seolink";
import SeoLocal from "./components/Pages/SEO/SeoLocal";
import SeoMain from "./components/Pages/SEO/SeoMain";
import SeoPPC from "./components/Pages/SEO/SeoPPC";
import SeoSEM from "./components/Pages/SEO/SeoSEM";
import { Reactnative } from "./components/Reactnative/Reactnative";
import { SeoDm } from "./components/SeoDigitalmarketing/SeoDm";
import { SkillsComPage } from "./components/skillsPageCom/SkillsComPage";
import Travel from "./components/Travel/Travel";
import Videostreaming from "./components/Videostreaming/Videostreaming";
import { Icecream } from "./components/Icecream/Icecream"; 
import Escooter from "./components/Escooter/Escooter";
import Wellness from "./components/Wellness/Wellness";
import { DigitalMarketing } from "./components/DigitaMarketing/DigitalMarketing";

import {
  angularjsData,
  backbonejsData,
  bigcommerceData,
  cakePHPData,
  cassandraData,
  codeigniterData,
  djangoData,
  DotnetData,
  drupalData,
  elasticData,
  emberjsData,
  flaskData,
  golangData,
  grailsData,
  hiberateData,
  hubspotData,
  ibmData,
  joomlaData,
  jqueryData,
  jsfData,
  laravelData,
  mongodbData,
  msSQLData,
  mysqlData,
  nextjsData,
  nodejsData,
  phalconData,
  phpData,
  postgresqlData,
  reactjsData,
  redisData,
  springBootData,
  sqliteData,
  strutsData,
  svelteData,
  symfonyData,
  vuejsData,
  wixData,
  wooecommerceData,
  wordpressData,
  semanticData,
  GhostData,
  WeeblyData,
} from "./Data/SkillsData";
import Logicstic from "./components/Logistic/Logicstic";
import Politics from "./components/Politics/Politics";
import { SaasPage } from "./components/SaasPage/SaasPage";
import { PricingPage } from "./components/pricing/PricingPage";
import News from "./components/News/News";
import { Event } from "./components/EventPage/Event";
import { ClientReview } from "./components/ClientReview/ClientReview";
import { OurClient } from "./components/OurClient/OurClient";
import { PickupDelivery } from "./components/PickupDelivery/PickupDelivery";
import Pharmacy from "./components/Pharmacy/Pharmacy";
import { AboutUS } from "./components/aboutUs/AboutUS";
import { CareerPage } from "./components/CareerPage/CareerPage";
import { Carpooling } from "./components/Carpooling/Carpooling";
import { BigDataServiceCom } from "./components/BigDataServiceCom/BigDataServiceCom";
import { BlockChainPage } from "./components/BlockChainPage/BlockChainPage";
import { SportsBetting } from "./components/Sportsbetting/SportsBetting";
import { VRPage } from "./components/VRPage/VRPage";
import { IOTPage } from "./components/IOTPage/IOTPage";
import { AIPage } from "./components/AIPage/AIPage";
import { Mern } from "./components/MernPage/Mern";

import { AwardsPage } from "./components/AwardsPage/AwardsPage";
import { NewsEvent } from "./components/NewsEvent/NewsEvent";
import { MLPages } from "./components/MLPages/MLPages";
import { EnterpriseWebPage } from "./components/EnterpriseWebPage/EnterpriseWebPage";
import { WebdevMain } from "./components/WebdevPages/WebdevMain";
import { ContactUS } from "./components/ContactUS/ContactUS";
import { StartupSolutions } from "./components/StartupSolutions/StartupSolutions";
import { CustomisedWebPage } from "./components/CustomisedWebPage/CustomisedWebPage";
import { CryptoDevPage } from "./components/CryptoDevPage/CryptoDevPage";
import { AspNetPage } from "./components/ASP.NETpage/AspNetPage";
import { FlowerDelevry } from "./components/FlowerDelevry/FlowerDelevry";
import { NFTpage } from "./components/NFTpage/NFTpage";
import { DataSciencePage } from "./components/DataSciencePage/DataSciencePage";
import { Javapage } from "./components/JavaDevPage/Javapage";
import { Marketplace } from "./components/Marketplace/Marketplace";
import { PythonPage } from "./components/PythonPage/PythonPage";
import { CloudPage } from "./components/CloudPage/CloudPage";
import { BIPages } from "./components/BIPages/BIPages";
import { MetaversePage } from "./components/MetaversePage/MetaversePage";
import { VettingPage } from "./components/VettingPage/VettingPage";
import { LaundryPage } from "./components/LaundryPage/LaundryPage";
import { RubyPage } from "./components/Rubypage/RubyPage";
import { GolangPage } from "./components/GolangPage/GolangPage";
import { JavascriptPage } from "./components/JavascriptPage/JavascriptPage";
import ToolDelivery from "./components/ToolDeliveryApp/ToolDelivery";
import { SalesforsePage } from "./components/SalesforsePage/SalesforsePage";
import { EngagementPage } from "./components/EngagementPage/EngagementPage";
import CryptoCurrency from "./components/CryptoCurrency/CryptoCurrency";
import { GameDevelopment } from "./components/GameDevelopment/GameDevelopment";
import { MeanPage } from "./components/MeanPage/MeanPage";
import { PhpPage } from "./components/PhpPage/PhpPage";
import { UIDesignPage } from "./components/UIDesignPage/UIDesignPage";
import { UXDesignPage } from "./components/UXDesignPage/UXDesignPage";
import { OurDevPage } from "./components/OurDevPage/OurDevPage";
import { EyeWearDelivery } from "./components/EyeWearDeliveryPage/EyeWearDelivery";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";
import { BusinessAnalysis } from "./components/BusinessAnalysis/BusinessAnalysis";
import { FullCycleDesignPages } from "./components/FullCycleDesignPages/FullCycleDesignPages";
import { UXReviewPage } from "./components/UXReviewPage/UXReviewPage";
import { Products } from "./components/Products-Page/Products";
import { Scoping } from "./components/Scoping-Session-Page/Scoping";
import { FintechSolution } from "./components/FintexhSolution/FintechSolution";
import { CarService } from "./components/Car-Service-page/CarService";
import { XamarinAppDevelopment } from "./components/XamarinAppDevelopment/XamarinAppDevelopment";
import { Aviation } from "./components/Aviation/Aviation";
import { AiContentServices } from "./components/AiContentService/AiContentServices";
import { ReactNativeAppDevelopment } from "./components/ReactNativeAppDevelopment/ReactNativeAppDevelopment";
import { MobileDevMain } from "./components/MobileDevMain/MobileDevMain";
import { KotlinAppDevelopment } from "./components/KotlinAppDevelopment/KotlinAppDevelopment";
import { Telecommunication } from "./components/Telecommunication/Telecommunication";
import { WebsiteBuilderApp } from "./components/WebsiteBuilderApp/WebsiteBuilderApp";
import { AndriodAppDevelopment } from "./components/AndriodAppDevelopment/AndriodAppDevelopment";
import { MeatDeliveryApp } from "./components/Meat-Delivery-App/MeatDeliveryApp";
import { AppBuilderSoltion } from "./components/AppBuilderSoltion/AppBuilderSoltion";
import { WearableAppDevelopment } from "./components/WearableAppDevelopment/WearableAppDevelopment";
import { ImageAnalysisSoftwarePage } from "./components/ImageAnalysisSoftwarePage/ImageAnalysisSoftwarePage";
import { IonicAppDevelopment } from "./components/IonicAppDevelopment/IonicAppDevelopment";
import { Agriculture } from "./components/Agriculture/Agriculture";
import { PlantBasedMeat } from "./components/PlantBaseMeat/PlantBasedMeat";
import { MobileUiUxDesign } from "./components/MobileUiUxDesign/MobileUiUxDesign";
import { DigitalTransformation } from "./components/DigitalTransformation/DigitalTransformation";

import { ItConsultingWebsite } from "./components/ITConsultingWebsite/ItConsultingWebsite";
import { OnlinePaymentAppSolution } from "./components/OnlinePaymentAppSolution/OnlinePaymentAppSolution";
import { TradingInvesting } from "./components/Trading-Investing-App-Page/Trading&Investing";
import { KidsWear } from "./components/KidsWear/KidsWear";
import { FunnelDesk } from "./components/FunnelDesk/FunnelDesk";
import { TaxiBookingApp } from "./components/TaxiBookingApp/TaxiBookingApp.jsx";
import { Hireatalent } from "./components/Hireatelent/Hireatalent";
import { ApplyTalent } from "./components/Apply-Talent/ApplyTalent";
import { RealEstate } from "./components/RealEstate/RealEstate";



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
      <Route path="/flutter" element={<FlutterAppDevelopment />} />
      <Route path="/ionic" element={<IonicAppDevelopment />} />
      <Route path="/Aviation" element={<Aviation />} />
      <Route path="/Ai-content" element={<AiContentServices />} />
      <Route path="/ios" element={<IOSAppDevelopmentPage />} />
      <Route path="/Xamarin-Development" element={<XamarinAppDevelopment />} />
      <Route path="/reactNative" element={<ReactNativeAppDevelopment />} />
      <Route path="/android" element={<AndriodAppDevelopment />} />
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
        path="/semanticui"
        element={<SkillsComPage allData={semanticData} />}
      />
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
      <Route path="/ibm-db" element={<SkillsComPage allData={ibmData} />} />
      <Route
        path="/elasticsearch"
        element={<SkillsComPage allData={elasticData} />}
      />
      <Route path="/SQLite" element={<SkillsComPage allData={sqliteData} />} />
      <Route
        path="/Cassandra"
        element={<SkillsComPage allData={cassandraData} />}
      />
      <Route path="/flask" element={<SkillsComPage allData={flaskData} />} />
      <Route path="/golang" element={<SkillsComPage allData={golangData} />} />
      <Route path="/struts" element={<SkillsComPage allData={strutsData} />} />
      <Route
        path="/symfony"
        element={<SkillsComPage allData={symfonyData} />}
      />
      <Route path="/grails" element={<SkillsComPage allData={grailsData} />} />
      <Route path="/jsf" element={<SkillsComPage allData={jsfData} />} />
      <Route
        path="/phalcon"
        element={<SkillsComPage allData={phalconData} />}
      />
      <Route path="/ghost" element={<SkillsComPage allData={GhostData} />} />
      <Route path="/weebly" element={<SkillsComPage allData={WeeblyData} />} />
      <Route path="/beautycareapp" element={<Beautysection />} />
      <Route path="/digitalmarketing" element={<SeoDm />} />
      <Route path="/emailservices" element={<SeoEmail />} />
      <Route path="/food-delivery" element={<FoodDelivery />} />
      <Route path="/education" element={<Educationpage />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/ecommerce" element={<EcommerceComPage />} />
      <Route path="/gameDevelopment" element={<GameDevelopment />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/videostreaming" element={<Videostreaming />} />
      <Route path="/dating" element={<Dating />} />
      <Route path="/alcohol" element={<AlcoholDeliveryPage />} />
      <Route path="/cannabis" element={<Cannabis />} />
      <Route path="/Icecream" element={<Icecream />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/eScooter" element={<Escooter />} />
      {/* <Route path="/taxi-booking" element={<Taxibooking />} /> */}
      <Route path="/taxi-booking" element={<TaxiBookingApp />} />
      <Route path="/Logistics" element={<Logicstic />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/news" element={<News />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/events" element={<Event />} />
      <Route path="/saas" element={<SaasPage />} />
      <Route path="/client-reviews" element={<ClientReview />} />
      <Route path="/our-clients" element={<OurClient />} />
      <Route path="/pickup&delivery" element={<PickupDelivery />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/contact-us" element={<ContactUS />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/carpooling" element={<Carpooling />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/bigdata-services" element={<BigDataServiceCom />} />
      <Route path="/block-chain" element={<BlockChainPage />} />
      <Route path="/sports-betting" element={<SportsBetting />} />
      <Route path="/virtual-reality" element={<VRPage />} />
      <Route path="/internet-of-things" element={<IOTPage />} />
      <Route path="/artificial-inteligence" element={<AIPage />} />
      <Route path="/mern-stack" element={<Mern />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/awards" element={<AwardsPage />} />
      <Route path="/PressAndMedia" element={<NewsEvent />} />
      <Route path="/machine-learning" element={<MLPages />} />
      <Route path="/enterprise-solutions" element={<EnterpriseWebPage />} />
      <Route path="/web-development" element={<WebdevMain />} />
      <Route path="/startup-solutions" element={<StartupSolutions />} />
      <Route path="/custom-web-solutions" element={<CustomisedWebPage />} />
      <Route path="/Crypto-Development" element={<CryptoDevPage />} />
      <Route path="/asp-net-development" element={<AspNetPage />} />
      <Route path="/flower-delivery" element={<FlowerDelevry />} />\
      <Route path="/NFT-Development" element={<NFTpage />} />
      <Route path="/data-science" element={<DataSciencePage />} />
      <Route path="/laundry" element={<LaundryPage />} />
      <Route path="/java-development" element={<Javapage />} />
      <Route path="/python-development" element={<PythonPage />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/Business-intelligence" element={<BIPages />} />
      <Route path="/metaverse" element={<MetaversePage />} />
      <Route path="/vetting-process" element={<VettingPage />} />
      <Route path="/ruby-development" element={<RubyPage />} />
      <Route path="/golang-development" element={<GolangPage />} />
      <Route path="/javascript-development" element={<JavascriptPage />} />
      <Route path="/tool-delivery" element={<ToolDelivery />} />
      <Route path="/salesforce" element={<SalesforsePage />} />
      <Route path="/engagement" element={<EngagementPage />} />
      <Route path="/cryptocurrency" element={<CryptoCurrency />} />
      <Route path="/mean-stack-development" element={<MeanPage />} />
      <Route path="/php-development" element={<PhpPage />} />
      <Route path="/user-experience" element={<UXDesignPage />} />
      <Route path="/user-interface" element={<UIDesignPage />} />
      <Route path="/Our-development" element={<OurDevPage />} />
      <Route path="/Digital-marketing" element={<DigitalMarketing />} />
      <Route path="/Eyewear-Delivery-App" element={<EyeWearDelivery />} />
      <Route path="/Business-Anylysis" element={<BusinessAnalysis />} />
      <Route path="/Social-Media" element={<SocialMedia />} />
      <Route
        path="/Full-Cycle-Poduct-Design"
        element={<FullCycleDesignPages />}
      />
      <Route path="/UX-Review" element={<UXReviewPage />} />
      <Route path="/Scoping-session" element={<Scoping />} />
      <Route path="/Fintech-solution" element={<FintechSolution />} />
      <Route path="/Car-services" element={<CarService />} />
      <Route path="/mobile-app-development" element={<MobileDevMain />} />
      <Route path="/kotlin-development" element={<KotlinAppDevelopment />} />
      <Route path="/telecommunication" element={<Telecommunication />} />
      <Route path="/website-builder-app" element={<WebsiteBuilderApp />} />
      <Route path="/meat-delivery-app" element={<MeatDeliveryApp />} />
      <Route path="/app-builder-solutions" element={<AppBuilderSoltion />} />
      <Route
        path="/online-paymentapp-solution"
        element={<OnlinePaymentAppSolution />}
      />
      <Route
        path="/wearable-app-development"
        element={<WearableAppDevelopment />}
      />
      <Route path="/agriculture-solution-app" element={<Agriculture />} />
      <Route
        path="/plant-based-meat-delivery-app"
        element={<PlantBasedMeat />}
      />
      <Route path="/mobile-user-experience" element={<MobileUiUxDesign />} />
      <Route
        path="/image-analysis-software"
        element={<ImageAnalysisSoftwarePage />}
      />
      <Route
        path="/Digital-transformation"
        element={<DigitalTransformation />}
      />
    
      <Route path="/IT-consulting" element={<ItConsultingWebsite />} />
      <Route path="/trading-investing" element={<TradingInvesting />} />
      <Route path="/kids-wear" element={<KidsWear />} />
      <Route path="/funnel-desk" element={<FunnelDesk />} />
      <Route path="/hire-a-talent" element={<Hireatalent />} />
      <Route path="/Apply-new-talent" element={<ApplyTalent/>} />

      <Route path="/real-state-solution" element={<RealEstate />} />

    </Routes>
  );
};
