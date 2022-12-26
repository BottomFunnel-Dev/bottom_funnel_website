import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { BuildAndGrow } from './BuildAndGrow/BuildAndGrow';
import { FieldServiceBanner } from './FieldServiceBanner/FieldServiceBanner';
import "./FieldServiceManagement.css"
import { ServiceExperience } from "./ServiceExperience/ServiceExperience";
import { StellarFieldService } from "./StellarFieldService/StellarFieldService";
import { FieldServiceMobileScreen } from "./FieldServiceMobileScreen/FieldServiceMobileScreen";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const FieldServiceManagement = () => {
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);

    return (
        <div>
            <FieldServiceBanner />
            <BuildAndGrow />
            <ServiceExperience />
            <FieldServiceMobileScreen />
            <StellarFieldService />

            <StoriesSection />
            <Industries />
            <PlanProject />
            <OndemandSection />
            <PortFolio />
            <SeoblogSection />
            <Revamping />
            <TextDropdown />
            <ContectForm />
            <MainFooter />
        </div>
    )
}
