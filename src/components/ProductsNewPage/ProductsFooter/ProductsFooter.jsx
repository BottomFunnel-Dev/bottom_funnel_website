import React from 'react';
import "./ProductsFooter.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';

export const ProductsFooter = () => {
    return (
        <div className='productsFooterParentDiv'>
            <div className='productsFooterTopImagesMainDiv'>
                <div className='productFooterLogoDiv'>
                    <img src='/Images/ProductsPage/Footer/Funnel-logo.png' alt='image' />
                </div>

                <div className='productsFooterSocialMediaLogos'>
                    <div className="productsfooterSocialMediaSection">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100075774771610"
                        >
                            <IconContext.Provider value={{ className: "productPagesocialIcons" }}>
                                <FaFacebookF />
                            </IconContext.Provider>
                        </a>
                        <a target="_blank" href="https://twitter.com/BottomFunnel">
                            <IconContext.Provider value={{ className: "productPagesocialIcons" }}>
                                <FaTwitter />
                            </IconContext.Provider>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/bottomfunnel/mycompany/verification/"
                        >
                            <IconContext.Provider value={{ className: "productPagesocialIcons" }}>
                                <FaLinkedin />
                            </IconContext.Provider>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/bottomfunnelmarketing/"
                        >
                            <IconContext.Provider value={{ className: "productPagesocialIcons" }}>
                                <AiFillInstagram />
                            </IconContext.Provider>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UC-zyghDYFUgRSUlKTadvJuQ"
                        >
                            <IconContext.Provider value={{ className: "productPagesocialIcons" }}>
                                <FaYoutube />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>

            <div className='productsFooterContentMainDiv'>
                <div className='productsFooterTagsDiv'>
                    <ul className='productMainProductDivLink'>
                        <h5> Products </h5>

                        <li>
                            BottomFunnel Desk
                        </li>

                        <li>
                            BottomFunnel Chat
                        </li>

                        <li>
                            BottomFunnel Sales
                        </li>

                        <li>
                            BottomFunnel Marketer
                        </li>

                        <li>
                            BottomFunnel Service
                        </li>

                        <li>
                            BottomFunnel Team
                        </li>

                        <li>
                            BottomFunnel Survey
                        </li>
                    </ul>

                    <ul className='productMainProductDivLink'>
                       
                         <h5> Services </h5>
                         
                         <Link className='productFooterLinkTag' to="/web-development"> <li>
                            Web Development
                        </li>
                        </Link>


                        <Link className='productFooterLinkTag' to="/mobile-app-development"> <li>
                            Mobile App Development
                        </li>
                        </Link>

                        <Link className='productFooterLinkTag' to="/Digital-marketing"> <li>
                            Digital Marketing
                        </li>
                        </Link>

                        <Link className='productFooterLinkTag' to="/">  <li>
                            Trending Technologies
                        </li>
                        </Link>
                    </ul>

                    <ul className='productMainProductDivLink'>
                        <h5> SaaS </h5>

                        <li>
                            On Demand Solution
                        </li>

                        <li>
                            Industries
                        </li>

                    </ul>

                    <ul className='productMainProductDivLink'>
                        <h5> About </h5>

                        <li>
                            Company
                        </li>

                        <li>
                            Careers
                        </li>

                        <li>
                            Privacy Policy
                        </li>

                        <li>
                            Contact Us
                        </li>
                    </ul>

                </div>

                <div className='productFooterBottomDiv'>
                    <div className='productFooterBottomDivContentDiv'>
                        <h5>
                            ©2022 BottomFunnel. All rights reserved
                        </h5>
                    </div>

                    <div className='productFooterBottomDivImagesDiv'>
                        <img src='/Images/ProductsPage/Footer/Google Play.png' alt='image' />
                        <img src='/Images/ProductsPage/Footer/Play Store.png' alt='image' />
                    </div>
                </div>
            </div>

        </div>
    );
};
