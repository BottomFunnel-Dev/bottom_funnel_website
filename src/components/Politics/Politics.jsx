import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PlanProject from '../PlanProject/PlanProject'
import PortFolio from '../PortFolioSection/PortFolio'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import Politicalparty from './Politicalparty'
import Politicaltool from './Politicaltool'
import Politicalvolunteer from './Politicalvolunteer'
import Politicscontainer from './Politicscontainer'
import Politicsmobile from './Politicsmobile'
import Politicsreliable from './Politicsreliable'
import Politictarget from './Politictarget'
 

export default function() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div> 
       <Politicscontainer/>
       <Politicalparty/>
       <Politicsmobile/>
       <Politicalvolunteer/>
       <Politicaltool/>
       <Politicsreliable/>
       <Politictarget/>
       <StoriesSection/>
       <PlanProject/>
       <Industries/>
       <OndemandSection/>
       <PortFolio/>
       <SeoblogSection/>
       <Revamping/>
       <TextDropdown/>
       <ContectForm/>
       <MainFooter/>
    </div>
  )
}
