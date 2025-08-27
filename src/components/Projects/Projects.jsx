import React from "react";
import logoDec from "../../assets/logodec.png";
import logoshopping from "../../assets/shopping.png";
import gamestash from "../../assets/GameStashBlue.png";
import cometchat from "../../assets/cometchat.png";

const Projects = () => {
  const cardItem = [
    {
      id: 1,
      logo: logoshopping,
      name: "Shopping App (Android App)",
      projectDesc:
        "This is an e-commerce app where the admin uploads products, and users can browse, select, and purchase them",
      videoUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7284792830403788800/?originTrackingId=QnlsTcVKRc%2BO8k9RSm93sQ%3D%3D",
      codeUrl: "https://github.com/AbdulRahamanskar/ShoppingUserApp",
    },
    {
      id: 2,
      logo: logoDec,
      name: "DEC Industries (Android App)",
      projectDesc:
        "This is a building construction app for selling interior designs to clients like builders involved in residential projects.",
      videoUrl:
        "https://drive.google.com/file/d/1WZrQUj15Iowj05EKwfIYdHpPzHPFjO0N/view",
      codeUrl: "https://github.com/AbdulRahamanskar/Dec-Industries-Project",
    },
    {
      id: 3,
      logo: gamestash,
      name: "GameStash (Design In Figma)",
      projectDesc:
        "I have designed a gaming e-commerce app using Figma, including features like login, signup, product listings & more.",
      videoUrl: "#",
      codeUrl:
        "https://www.figma.com/design/Mw0HuK7t6se6zGWICCamFk/GameStash-Project?node-id=0-1&t=cBWCWXBfccPEQAVT-1",
    },
    {
      id: 4,
      logo: cometchat,
      name: "Comet Chat",
      projectDesc:
        "Comet Chat Company provides me Figma design I converted into react website.",
      videoUrl: "https://comet-chat-puce.vercel.app/",
      codeUrl: "https://github.com/AbdulRahamanskar/CometChat",
    },
  ];
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(
            ({ id, logo, name, projectDesc, videoUrl, codeUrl }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:my-2 hover:scale-105 duration-300"
                key={id}>
                <img
                  className="rounded-full w-[120px] h-[120px] p-1 border-[2px]"
                  src={logo}
                  alt="Project Image"
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700 ">{projectDesc}</p>
                </div>
                <div
                  className="px-6 py-4
            space-x-4 justify-around">
                  <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer">
                      Demo
                    </button>
                  </a>

                  <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded cursor-pointer">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <br />
      <br />
      <hr className=" text-gray-100" />
    </>
  );
};

export default Projects;
