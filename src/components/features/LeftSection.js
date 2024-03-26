import React, { useState } from "react";
import "./Features.css";
import MyVerticallyCenteredModal from "./VerticalLaunch";
import Button from "react-bootstrap/Button";

const LeftSection = (props) => {
  const backgroundurl =
    "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/xuv700fsd1280x1040px.jpg?rev=8b56f5d8173842d6850635aa6df27fe4&extension=webp";

  const [sciFiModalShow, setSciFiModalShow] = React.useState(false);
  const [spritrdModalShow, setSpritedModalShow] = React.useState(false);
  const [safetyModalShow, setSafetyModalShow] = React.useState(false);
  const [PresenceModalShow, setPresenceModalShow] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "50px",
        backgroundImage: `url(${backgroundurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      <div className="leftsection-features">
        <h1
          style={{ textAlign: "center", paddingBottom: "50px", color: "black" }}
        >
          Features & Specifications
        </h1>

        <a href="#">
          <Button variant="secondary" onClick={() => setSciFiModalShow(true)}>
            Sci-Fi Technology
          </Button>

          <MyVerticallyCenteredModal
            title="Sci-Fi Technology"
            images={[
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/traffic-sign-recognition-feature.jpg?h=490&w=1171&rev=43ced8c6c11b4e56b4ff3ce3bdaf3328&extension=webp",
                description:
                  "You may miss out on a road-sign or two,but your SUV won't!",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/adpative-cruise-control-feature.jpg?h=490&w=1171&rev=7d9c8905de3f4f0794e7b44aaae4b67b&extension=webp",
                description: "An intelligent SUV with intelligent speed.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/high-beam-assist-feature.jpg?h=490&w=1171&rev=45e828263b4a430a9113108685ac51c5&extension=webp",
                description:
                  "Blind them with your adventure, not your headlights.",
              },
            ]}
            show={sciFiModalShow}
            onHide={() => setSciFiModalShow(false)}
          />
        </a>

        <a href="#">
          <Button variant="secondary" onClick={() => setSpritedModalShow(true)}>
            Spirited Performance
          </Button>

          <MyVerticallyCenteredModal
            title="Spirited Performance"
            images={[
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/custom-drive-modes-feature.jpg?h=490&w=1171&rev=02a41be441ce4200a4a2e1419428c2cd&extension=webp",
                description:
                  "Best-in-class engines that pack a punch, with an impressive horsepower of 147.1 kW and 136 kW , and an amazing low-end torque.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/mhawk-mstallion-engines.jpg?h=490&w=1171&rev=4c087ea385474bb2a21efb34e5b78cea&extension=webp",
                description:
                  "Ever thought that parking would have its own conveniences? The XUV700 comes with a control switch that enables static and dynamic apply and release.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/electronic-park-brake-feature.jpg?h=490&w=1171&rev=f86aa02396b64317a9210c36064662ac&extension=webp",
                description:
                  "Choose your rush with intuitive technology that lets you Zip, Zap, Zoom, or customise your drive mode.",
              },
            ]}
            show={spritrdModalShow}
            onHide={() => setSpritedModalShow(false)}
          />
        </a>

        <a href="#">
          <Button variant="secondary" onClick={() => setSafetyModalShow(true)}>
            World Class Safety
          </Button>

          <MyVerticallyCenteredModal
            title="World Class Safety"
            images={[
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/xuv700-airbags.jpg?h=490&w=1171&rev=c6b07dc815a5411da6756bde20dd40f8&extension=webp",
                description:
                  "While you live the rush, the XUV700 handles your safety for you, with best-in-class 7 Airbags.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/electronic-stability-program.jpg?h=490&w=1171&rev=91efd143cbc24f85892cc2f8e09cbec7&extension=webp",
                description:
                  "Ensures a stable drive to help you push your limits on every adventure.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/front-collision-warning-feature.jpg?h=490&w=1171&rev=08530792777041df9b00a0eb858a5b17&extension=webp",
                description:
                  "The XUV700 can sense a sudden obstacle before you do and intimates you to act by sending an alert.",
              },
            ]}
            show={safetyModalShow}
            onHide={() => setSafetyModalShow(false)}
          />
        </a>

        <a href="#">
          <Button
            variant="secondary"
            onClick={() => setPresenceModalShow(true)}
          >
            Unmissiable Presence
          </Button>

          <MyVerticallyCenteredModal
            title="Unmissiable Presence"
            images={[
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/diamond-cut-alloy-wheels.jpg?h=490&w=1171&rev=4582a4d5403c472190c8d44dae576415&extension=webp",
                description:
                  "Distinctive Diamond Cut Alloy Wheels that ensure a bold SUV stance, even at a standstill.",
              },
              {
                url: "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/clear-view-headlamps.jpg?h=490&w=1171&rev=ba8b5042506d4f169f0bbf6d33583154&extension=webp",
                description:
                  "Announce your arrival in style with striking headlamps and LED DRLs",
              },
            ]}
            show={PresenceModalShow}
            onHide={() => setPresenceModalShow(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default LeftSection;
