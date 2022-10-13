import React from "react";
import "./PhPWhyBF.css";
import { FaHandPointRight } from "react-icons/fa";

export const PhPWhyBottomFunnel = () => {
  return (
    <div className="php-why-main">
      <h1>Why Bottom funnel for PHP</h1>
      <div className="php-why-content">
        <div className="php-bullets-points-image">
          <img
            src="Images/phpskillsphotos/php-big-logo.png"
            alt="php big logo"
          />
        </div>
        <div className="php-bullets-points-main">
          <div className="php-bullets-points">
            <p>
              <FaHandPointRight />
              Fast customer services
            </p>
            <p>
              <FaHandPointRight />
              Always be in teach with customer
            </p>
            <p>
              <FaHandPointRight />
              Skills employees
            </p>
            <p>
              <FaHandPointRight />
              effective and efficient work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
