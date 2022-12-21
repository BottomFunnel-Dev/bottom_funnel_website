import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./ProductsNewPage.css";
import { ProductsNewPageBanner } from './ProductsNewPageBanner/ProductsNewPageBanner';
import { SimpleAndEasy } from "./SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "./TalentProfiles/TalentProfiles";
import { GetStarted } from "./GetStarted/GetStarted";
import StoriesSection from "../StoriesSection/StoriesSection";
import { TalentNetwork } from "./TalentNetwork/TalentNetwork";
import { CustomerTrust } from "./CustomerTrust/CustomerTrust";
import MultipleProducts from "./MultipleProducts/MultipleProducts";

import MainFooter from "../FooterSection/MainFooter";
import ContectForm from "../ContectForm/ContectForm";
import Revamping from "../revamping/Revamping";
import { OurCommitment } from "./OurCommitment/OurCommitment";

export const ProductsNewPage = () => {
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
    return (
        <div>
            <ProductsNewPageBanner />

            <MultipleProducts />

            <TalentNetwork />

            <SimpleAndEasy />

            <TalentProfiles />

            {/* <OurCommitment /> */}

            <StoriesSection />

            <CustomerTrust />

            <Revamping />

            <GetStarted />

            <ContectForm />

            <MainFooter />


        </div>
    )
}
