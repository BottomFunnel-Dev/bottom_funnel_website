import React from "react";
import "./nodejsWhyApp.css";

export const NodejsWhyApplication = () => {
  let nodejsWhyAppCardsData = [
    {
      img: {
        src: "Images/nodejsphotos/fast-run.png",
        alt: "The fast suit logo",
      },
      title: "The fast suit",
      description:
        "Node.js is fast, agile and lightweight which allows for lightning-fast development of web applications. Node.js offers developers the ability to use JavaScript into native machine code, making it more efficient and faster.",
    },
    {
      img: {
        src: "Images/nodejsphotos/clock.png",
        alt: "Real time web application logo",
      },
      title: "Real time web application",
      description:
        "Node.js is the leading platform for supporting real-time web applications. Its apps are easily scalable and reliable, making them perfect for businesses that need to handle high traffic volumes.",
    },
    {
      img: {
        src: "Images/nodejsphotos/extreme-data.png",
        alt: "Extreme data streaming agilty logo",
      },
      title: "Extreme data streaming agilty",
      description:
        "Extreme data streaming ability allows for quick processing of large files. Node.js allows you to create readable and writable streams of data, making it ideal for data streaming applications.",
    },
    {
      img: {
        src: "Images/nodejsphotos/data.png",
        alt: "Single code based logo",
      },
      title: "Single code based",
      description:
        "Node.js is a provider of data synchronization services between the server and the client. It provides a single code for an app, which can be used for different platforms, making it coder as well as platform friendly language.",
    },
    {
      img: {
        src: "Images/nodejsphotos/dynamic.png",
        alt: "Rich ecosystem logo",
      },
      title: "Rich ecosystem",
      description:
        "Node Package Manager offers a fast and reliable platform for developing, testing and deploying Node.js applications. It offers prewritten, reusable code snippets and templates to build app more creative, faster and cheaper.",
    },
    {
      img: {
        src: "Images/nodejsphotos/community.png",
        alt: "Community driven logo",
      },
      title: "Community driven",
      description:
        "Be a part of node.js community and gain access to reliable, experienced, and friendly developers who can help you with your projects and receive latest updates and innovations on this technology.",
    },
  ];
  return (
    <div className="nodejs-why-application-main">
      <h1>Why Nodejs for application development</h1>
      <div className="nodejs-why-application-content">
        {nodejsWhyAppCardsData.map(({ img, title, description }, idx) => {
          return (
            <div key={idx}>
              <div className="nodejs-why-appl-cards-images-div">
                <img src={img.src} alt={img.alt} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
