import React from "react";
import "./CryptoDevcurrency.css";

export const CryptoDevcurrency = () => {
  return (
    <div className="CryptoDevcurrency-container">
      <div className="CryptoDevcurrency-main">
        <h1>CryptoCurrency</h1>
        <div className="CryptoDevcurrency-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Digital currencies like Bitcoin or Ethereum are making their way
          through the mainstream economy and becoming more and more popular.
          With Bottom Funnel's help, you won't miss any of these emerging
          opportunities! We will guide you through the whole process of
          investing in crypto currency so that your interests don't go
          unrewarded. All you need to do is sign up and start using our
          services. Our team consists of highly skilled professionals who have
          years of experience in handling accounts from different types of
          users: beginners, traders, investors etc. We make sure that every
          single transaction goes smoothly so that you can feel confident about
          doing business with us - Bottom Funnel stands for security and
          reliability.
        </p>
      </div>
      <div className="CryptoDevcurrency-images-container">
        <div>
          <img
            src="Images/CryptoDevPhotos/bitcoin-coin.png"
            alt="Bitcoin coin"
          />
          <h2>Side Chain Wallet Development</h2>
        </div>
        <div>
          <img src="Images/CryptoDevPhotos/blockchain.png" alt="Blockchain" />
          <h2>Alternative block chain</h2>
        </div>
      </div>
    </div>
  );
};
