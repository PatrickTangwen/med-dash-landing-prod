import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import JesseProfile from "images/jesse.jpg";
const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  // `background-image: url("${props.imageSrc}");`,
  // tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
  // // Add custom CSS for image size
  // tw`w-32 h-32 md:w-64 md:h-64`, // Adjust the dimensions as needed
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-64 md:h-64 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:"https://github.com/PatrickTangwen/med-dash-login/blob/main/src/images/login.jpg?raw=true",
      title: "Introduction",
      description:
        "As health sensor technology becomes more advanced and common amongst the general population, we as data scientists are provided with a whole plethora of health related data that can provide meaningful insights to a person’s health status. Our project aims to combine all the different forms of sensor data into a consolidated dashboard that will provide the user with a snapshot of their current health status."
    },

    {
      imageSrc:"https://private-user-images.githubusercontent.com/102549602/309459844-c3213357-626d-487b-aa6e-ace46fde00e4.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MzQ2MDcsIm5iZiI6MTcwOTkzNDMwNywicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDU5ODQ0LWMzMjEzMzU3LTYyNmQtNDg3Yi1hYTZlLWFjZTQ2ZmRlMDBlNC5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwOFQyMTQ1MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yN2E3ZDZmOTczYmIwYmFmZWUwOGM5NDI3ZmUzMTVjYWY1MzIwNzUyMmU1MTMzZDg0NjQ0Y2I2YjAxMjc0OGIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9kRsV9pUTiMSvawlDm8NcwXlyrU-dNnaS5HI5xFf7XE",
      title: "Background",
      description:
        "Major insufficiencies in healthcare systems today leave patients and clinicians alike wanting for a more effective way of receiving and giving care. Several major deficiencies are 1) the lack of an integrated Electronic Health Record (EHR), lifelog, and personal omics data, and 2) the lack of standardization across healthcare systems, data standards, and terminologies. This incompatibility creates inefficiencies in operating personalized medicine, leading to problems with interoperability and introducing ambiguity into the healthcare environment, especially amongst patients, their providers, and organizations. We talked to real patients who have struggled with these issues in their medical are history, and identified the core problems they were having with the way care was prescribed to them. Using this information, we proceeded to come up with a solution that could help boost the communication and understanding between patients and their healthcare providers.",
    },

    {
      imageSrc:
        "https://github.com/PatrickTangwen/med-dash-login/blob/main/src/images/diagram.jpg?raw=true",
      title: "Data Collection",
      description:
        "We were given data from volunteer patients that were eager to help with our project. The data comes from the Vital API and includes variables such as: heart rate, calories burned, number of steps, etc. This is unique from other dashboards as we are obtaining the data from the patients themselves that they provide from different sources",
    },
    {
      imageSrc:
       "https://private-user-images.githubusercontent.com/102549602/309460193-fb29b30d-af9b-4eee-88f5-619b33fd4ec6.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MzQ2MDcsIm5iZiI6MTcwOTkzNDMwNywicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDYwMTkzLWZiMjliMzBkLWFmOWItNGVlZS04OGY1LTYxOWIzM2ZkNGVjNi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDMwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAzMDhUMjE0NTA3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MTA2OWQwNzk3ZDlhMzgwMmIyMTRmYmE0Njc1MzhmZTVjODg3OGIxNzMxZDc1N2Q3YmE2YTZhNjhkYWRhNzg4NCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.OimV2rmHI5J3ttJ7G4M7bKXetDEfO2D1_s0nF1SgJSQ",
      title: "Methods",
      description:
        "For design, we used third party library called “AntDesign” as the primary tool to integrate visualizations onto our website while using Pandas,Numpy,MongoDB to create a data pipeline that is designed to pull, read, clean, standardize, and add features to the data given to our team from the Vital APIs. To host our work, we used React.js hosted on Github Pages to create a website that would allow the user to interact with the visualizations.",
    },
    {
      imageSrc:
        "https://private-user-images.githubusercontent.com/102549602/309460107-e004d67a-4e4d-4511-9456-3314aef0e874.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MzQ2MDcsIm5iZiI6MTcwOTkzNDMwNywicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDYwMTA3LWUwMDRkNjdhLTRlNGQtNDUxMS05NDU2LTMzMTRhZWYwZTg3NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwOFQyMTQ1MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYTBlOTNkMGE4MGU4YjY5ZTUwODdmMzk4ZDkyMGZiOTM5NTFlMjQwYzQ5MzY3NzQ4MGU3NWFiNWFmN2QwYzFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.j9yxqDYp0JxDL4K-kbuLjPVz6RGwvzaenS7tVW8CXa0",
      title: "Next Step",
      description:
        "Incorporating more functionalities to the medical dashboard such as journal entry, predictive analytics and real-time health alerts. \n Getting more feedback from patients/users will help us determine what features are helpful.",
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          {/* <HeadingTitle>Popular Events</HeadingTitle> */}
          <HeadingDescription>
            The purpose and methodology behind our integrative medical dashboard
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
             
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
