import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import "./CryptoCurrency.css"
import { CryptoAdminpannel } from './CryptoAdminpannel'

import { CryptoCurrencyBanner } from './CryptoCurrencyBanner'
import { CryptoCurrencyWork } from './CryptoCurrencyWork'
import { CryptoLowerBanner } from './CryptoLowerBanner'

import CryptoMining from './CryptoMining'
import { CryptoWhyChoose } from './CryptoWhyChoose'
import { CryptoCurrencyServices } from './CryptoCurrencyServices'

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import StoriesSection from '../StoriesSection/StoriesSection'

const CryptoCurrency = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "white", logo: true}));
  }, []);

  return (
    <div className='cryptocurrencymainbox'>
    <CryptoCurrencyBanner />
    <CryptoCurrencyWork />
    <CryptoCurrencyServices />
   <CryptoMining />
   <CryptoAdminpannel />
   <CryptoLowerBanner />
   <CryptoWhyChoose />

     {/* ----- End of main page. Now Further components ----- */}
     <StoriesSection/>
     <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <MainFooter />


    </div>
  )
}

export default CryptoCurrency
