import React from "react";
import './Seoagency.css';
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import { IconContext } from "react-icons/lib";
import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Seoagency() {
    

    return (
            <Accordion flush className="_SeoAgencymaindiv"> 
              <Accordion.Item eventKey="0">
                <Accordion.Header ><h2 className="_SeoAgencyheader">Questions you must ask when you are recruiting an SEO Agency</h2></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h2 className="_SeoAgencyheader">Questions you must ask when you are recruiting an SEO Agency</h2></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        }