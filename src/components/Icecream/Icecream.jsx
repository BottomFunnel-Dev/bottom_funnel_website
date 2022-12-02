import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import Icecreamadminpanel from './Icecreamadminpanel'
import Icecreamcustomer from './Icecreamcustomer'
import { Icecreamdrive } from './Icecreamdrive'
import { Icecreamsection } from './Icecreamsection'
import { Icecreamsolution } from './Icecreamsolution'
 import { icecreamLogo } from '../../Data/SeopartnerData'
 
 export const Icecream = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
   return (
     <div >
       <Icecreamsection/>
       <Trusted partnerLogo={icecreamLogo}/>
       <Icecreamsolution/>
       <Icecreamcustomer/>
       <Icecreamadminpanel/>
       <Icecreamdrive/>
       <StoriesSection/>
       <PlanProject/>
       <Industries/>
       <Revamping/>
       <SeoblogSection/>
       <TextDropdown/>
       <ContectForm/>
       <MainFooter/>
     </div>
   )
 }
 