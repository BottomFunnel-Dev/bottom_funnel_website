import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import Newsfeature from './Newsfeature'
import Newsintro from './Newsintro'
import Newspaper from './Newspaper'
import Newspublish from './Newspublish'
import Newstrategy from './Newstrategy'
import { newsLogo } from '../../Data/SeopartnerData'
export default function News() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
        <Newsintro/>
        <Trusted partnerLogo={newsLogo} />
        <Newspaper/>
        <Newsfeature/>
        <Newspublish/>
        <Newstrategy/>
        <StoriesSection/>
        <Industries/>
        <OndemandSection/>
        <PlanProject/>
        <Revamping/>
        <SeoblogSection/>
        <TextDropdown/>
        <ContectForm/>
        <MainFooter/>
        
    </div>
  )
}
