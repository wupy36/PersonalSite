import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import BigProjectCard from "./BigProjectCard";
import BigProjectCardReversed from "./BigProjectCard-reversed";

const BigProjects: React.FC = () => {
  {
    /* PROJECT 1 */
  }
  //-------------------------------------------------------------
  const imageProps1 = {
    src: "/assets/images/ProjectPictures/BLtpl.png",
    alt: "Burning Lands Project Image",
    width: 500,
    height: 300,
  };
  const imageUrl1 =
    "/assets/images/ProjectPictures/small-images/";

  {
    /* PROJECT 2 */
  }
  //-------------------------------------------------------------
  const imageProps2 = {
    src: "/assets/images/ProjectPictures/Battlespace.jpg",
    alt: "Battlespace Project Image",
    width: 500,
    height: 300,
  };
  const imageUrl2 =
    "/assets/images/ProjectPictures/small-images/";

  {
    /* PROJECT 3 */
  }
  //-------------------------------------------------------------
  const imageProps3 = {
    src: "/assets/images/ProjectPictures/Zamboni.jpg",
    alt: "Zamboni Fight Simulator Project Image",
    width: 500,
    height: 300,
  };
  const imageUrl3 =
    "/assets/images/ProjectPictures/small-images/";

  {
    /* PROJECT 5 */
  }
  //-------------------------------------------------------------
  const imageProps5 = {
    src: "/assets/images/ProjectPictures/coming-soon.jpg",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl5 =
    "/assets/images/ProjectPictures/small-images/";

  return (
    <div
      id="Projects"
      className="max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleName="Projects" titleNumber="03" />
      <div>

        {/* PROJECT 1 */}
        <BigProjectCardReversed
          image={imageProps1}
          imageUrl={imageUrl1}
          title="Burning Lands Vietnam"
          description="Burning Lands is a tactical multiplayer first-person shooter set in the Vietnam war era. It will be, what we coined an “accessible tactical simulation” (ATS) striking the best possible balance between realism and accessibility, to bring you an intense gaming experience and large-scale team play you have not seen before in this scenario."
          gitLink="https://store.steampowered.com/app/1342400/Burning_Lands/"
          liveLink="https://burninglandsvietnam.com/"
          youtubeLink="https://www.youtube.com/c/burninglandsvietnam"
          techStackList={["Unreal Engine 5", "Blueprint", "C++"]}
        />
        
        {/* PROJECT 5 */}
        <BigProjectCard
          image={imageProps5}
          imageUrl={imageUrl5}
          title="Coming Soon"
          description="Work in progress"
          gitLink="https://andrewduit.com"
          liveLink="https://andrewduit.com"
          youtubeLink="https://andrewduit.com"
          techStackList={["Coming Soon"]}
        />

        {/* PROJECT 2 */}
        <BigProjectCardReversed
          image={imageProps2}
          imageUrl={imageUrl2}
          title="Battlespace: Modern Warfare"
          description="Immerse Yourself in 'BattleSpace': A Thrilling Modern Warfare Experience with Dynamic Gameplay, Realistic Environments, and Strategic Depth"
          gitLink="https://impactstudios.dev/"
          liveLink="https://battlespace.dev/"
          youtubeLink="https://youtube.com/@ImpactStudiosDev/"
          techStackList={["Unreal Engine 5", "Blueprint", "C++"]}
        />

        {/* PROJECT 3 */}
        <BigProjectCard
          image={imageProps3}
          imageUrl={imageUrl3}
          title="Zamboni Fight Simulator VR"
          description="Dive into the ice-cold action with 'Zamboni Fight Simulator VR'! Strap on your virtual reality headset and team up in thrilling 2v2 battles where you'll race against the clock to knock your opponents off the ice or be the fastest to resurface the rink. Can you outmaneuver and out-resurface your rivals in this high-energy, multiplayer VR showdown?"
          gitLink="https://github.com/wupy36"
          liveLink="https://andrewduit.com"
          youtubeLink="https://youtube.com/"
          techStackList={["Unreal Engine 5", "Blueprint", "C++", "Rift S"]}
        />

      </div>
    </div>
  );
};

export default BigProjects;
