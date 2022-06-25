import React from "react";
import Background from "../assets/background.jpeg";
import Blockchain from "../assets/blockchain1.png";
import Quest from "../assets/quest.jpeg";
import Typical from "react-typical";
import { PROJECTS } from "../Constants";

const MainscreenCenter = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="width-full flex lg:overflow-auto md:overflow-visible h-full flex-col scrollbar-hidden pb-16 smooth-scroll ">
      <img src={Background} alt="" className="absolute h-2/4 w-full z-0" />
      <div className="z-10 bg-darkGlass h-2/4 w-full flex justify-center">
        <div className="bg-glass w-screen mt-10 flex items-center justify-center flex-col rounded-xl py-16 min-w-fit sm:w-screen lg:w-4/5">
          <span className="text-white text-sm font-bold fjalla w-full pl-10 cursor-pointer sm:text-sm md:text-4xl">
            Hello,
          </span>
          <span className="text-white text-sm font-bold fjalla pl-16 w-full cursor-pointer sm:text-sm md:text-4xl">
            Discover my Space!
          </span>
          <div className="w-full my-16 flex flex-row">
            <span className="text-white text-xs font-bold fjalla px-4 sm:text-sm md:text-xl lg-text-4xl truncate">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
            <span className="text-white text-xs font-mono font-bold sm:text-sm md:text-xl lg-text-4xl contents md:hidden">
              {" "}
              I make stuff!{" "}
            </span>
            <Typical
              className="text-white text-xs font-mono font-bold sm:text-sm md:text-xl lg-text-4xl hidden md:contents"
              steps={[
                "I build web interfaces.",
                5000,
                "I build mobile interfaces.",
                5000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <span className="text-white text-xs font-bold fjalla px-4 sm:text-sm md:text-xl lg-text-4xl truncate">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
          </div>
        </div>
      </div>
      <div className="py-0 px-0 md:py-8 md:px-8 text-white z-10 bg-darkGlass pt-16">
        <span className="text-yellow cursor-pointer text-xl">Projects</span>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
          <div
            className="bg-lightGrey px-4 py-4 rounded-xl h-fit cursor-pointer transform transition duration-500 hover:scale-110"
            onClick={() => openInNewTab(PROJECTS.kryptoX)}
          >
            <img
              src={Blockchain}
              alt=""
              className="h-3/4 w-full"
              style={{
                height: "180px",
                display: "block",
                objectFit: "contain",
              }}
            />
            <h4 className="cursor-pointer mt-4">Blockchain Token Transfer</h4>
            <p className="text-textGrey">
              A web application to transfer tokens/coins on blockchain network
              and saving the transaction record along with a proper gif!
            </p>
          </div>

          <div
            className="bg-lightGrey px-4 py-4 rounded-xl h-fit cursor-pointer transform transition duration-500 hover:scale-110"
            onClick={() => openInNewTab(PROJECTS.quest)}
          >
            <img
              src={Quest}
              alt=""
              className="h-3/4 w-full"
              style={{
                maxHeight: "180px",
                display: "block",
                objectFit: "contain",
              }}
            />
            <h4 className="cursor-pointer mt-4">Quest Mobile App</h4>
            <p className="text-textGrey">
              A mobile application which helps to memorize questions and answers
              by asking them on a preset timings by user!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainscreenCenter;
