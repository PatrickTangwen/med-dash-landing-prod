import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";


import TeresaProfile from "images/teresa.png";
import HedeProfile from "images/hede.jpeg";
import TwhscProfile from "images/twhsc.jpeg";
import BryanProfile from "images/bryan.jpeg";
import JesseProfile from "images/jesse.jpg";
import NicoleProfile from "images/Nicoleprofile.png";
import YuchuProfile from "images/yuchu.jpg";
import EricProfile from "images/eric.jpg";
import ShrishtiProfile from "images/shrishti.jpeg";

const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full flex-shrink-0`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const ourTeam = React.forwardRef( ({
  members = null,
  heading = "Our Team",
  subheading = "University of California, San Diego",
  description = "We are a team of Data Science students at UC San Diego (supported by a group of Bioengineering students), advised by Dr. Benjamin Smarr"
}, ref) => {
/*
 * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
 *  1) imageSrc - the image shown at the top of the card
 *  2) title - the title of the card
 *  3) description - the description of the card
 *  If a key for a particular card is not provided, a default value is used
 */

const DSCmembers = [
  {
    imageSrc: HedeProfile,
    title: "Hede Yang",
    description: "Hi! I’m Hede and I’m a fourth year data science student at UCSD. I enjoy crocheting, hiking and free diving during my free time. "
  },
 { imageSrc: TwhscProfile, 
    title: "Wenhua Tang",
    description: "Hi! I'm Wenhua. I am currently in my third year at UC San Diego studying Data Science. I hope to find a job in data engineering in the future. During my free time, I enjoy playing video games and cooking." },
  { imageSrc: TeresaProfile, 
    title: "Teresa Lee",
    description: "Hi! I’m a fourth year data science student at UCSD. I hope to leverage data science in health to help patients. I enjoy cooking and going on walks during my free time." },
  { imageSrc: EricProfile, 
    title: "Eric Park",
    description: " Hi, I’m Eric and I’m currently a fourth year data science student at UCSD. In my free time, I enjoy playing basketball with friends and playing video games" },
  { imageSrc: JesseProfile, 
    title: "Zhilin Guo",
    description: "Fourth year student at UCSD, majoring in Data Science. I hope AI can provide more specific health services in the future." },
  { imageSrc: BryanProfile, 
    title: "Bryan Talavera",
    description: " Hi, I’m Bryan. I am a fourth year Data Science major. I hope to use my understanding of Data Science to help others make informed data-driven decisions. I enjoy skateboarding and playing video games with friends. " },
  { imageSrc: YuchuProfile, 
    title: "Yuchu Yan",
    description: "Hi, I'm a senior student at UCSD, majoring in Data Science with a minor in General Biology. My ambition is to integrate data science with other fields, particularly in the realm of biology. In my spare time, I enjoy go-karting, motorcycling, and baking." },
  { imageSrc: ShrishtiProfile, 
      title: "Shrishti Seksaria",
      description: "Hi! Im Shrishti, senior at UCSD pursuing Data Science and Economics. I hope to use data and technology to help others make better data driven decisions across all industries. In my free time I like to write poetry, play badminton, or go hiking ! " }
];

if (!members) members = DSCmembers;

return (
  <Container ref={ref}>
    <ThreeColumnContainer>
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading>{heading}</Heading>
      {description && <Description>{description}</Description>}
      <VerticalSpacer />
      {members.map((card, i) => (
        <Column key={i}>
          <Card>
            <span className="imageContainer">
              <img src={card.imageSrc || defaultCardImage} alt="profile picture" 
              style={{
                borderRadius: "50%",
                display: "block"
              }}
            />
            </span>
            <span className="textContainer">
              <span className="title">{card.title || "Fully Secure"}</span>
              <p className="description">
                {card.description || "Hello we need to add our info here"}
              </p>
            </span>
          </Card>
        </Column>
      ))}
    </ThreeColumnContainer>
  </Container>
);
});

export default ourTeam;
