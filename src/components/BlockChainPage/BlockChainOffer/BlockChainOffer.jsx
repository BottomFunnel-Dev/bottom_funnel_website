import React from "react";
import "./BlockChainOffer.css";

export const BlockChainOffer = () => {
  const cardsData = [
    {
      title: "Blockchain networks",
      body: "Secure and scalable permission-based or permissionless decentralized ecosystems with minimized downtime. Secure and scalable permission-based or permissionless decentralized ecosystems with minimized downtime. Secure and scalable permission-based or permissionless decentralized ecosystems with minimized downtime. Secure and scalable permission-based or permissionless decentralized ecosystems with minimized downtime.",
      image: "Images/BlockChainPhotos/networks.png",
    },
    {
      title: "Blockchain-based market platforms",
      body: "Peer-to-peer platforms (e.g., Defi lending platforms, blockchain-based marketplaces, etc.) for transparent, fraud-free transactions between the transactions between the parties. Peer-to-peer platforms (e.g., Defi lending platforms, blockchain-based marketplaces, etc.) for transparent, fraud-free transactions between the transactions between the parties.",
      image: "Images/BlockChainPhotos/stock-market.png",
    },
    {
      title: "Decentralized autonomous organizations (DAOs)",
      body: "Blockchain-based platforms for collaborative decision-making that drive productivity and trust across communities with no central authority. Blockchain-based platforms for collaborative decision-making that drive productivity and trust across communities with no central authority.",
      image: "Images/BlockChainPhotos/dao.png",
    },
    {
      title: "Crypto wallets & crypto assets",
      body: "We provide custom cryptocurrencies, cryto tokers utility, governance, reward and NFT. Digital wallets for storing and transacting various types of cryto assets. We provide custom cryptocurrencies, cryto tokers utility, governance, reward and NFT. Digital wallets for storing and transacting various types of cryto assets.",
      image: "Images/BlockChainPhotos/crypto.png",
    },
  ];

  return (
    <div className="BlockChainOffer-main">
      <h1>Popular Big Data Services</h1>
      <div className="BlockChainOffer-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Maintaining a high level of user engagement is how companies stay
        relevant. Our advances in technology and design thinking help you
        achieve it.
      </p>
      <div className="BlockChainOffer-Content">
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className="BlockChainOffer-Cards-Content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className="BlockChainOffer-Cards-Images">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="BlockChainOffer-Button">
        <h3>Talk with our experts in Big Data to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
