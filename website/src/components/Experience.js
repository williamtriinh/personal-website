import React from "react";
import styled from "styled-components";

import dreamlandImage from "../dreamlandcafe.jpg";
import nokiaImage from "../nokia.jpg";
import digiteraImage from "../digitera.png";

import ExperienceItem from "./ExperienceItem";

const ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ExperienceBody = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-family: "Roboto";
    font-size: 1.4em;
    font-weight: 500;
    color: #414141;
    padding: 0;
`;

const TextHeader = styled.p`
    font-size: 1em;
    font-weight: 900;
    margin: 0 1em 0 0;
    padding: 0;
`;

const TextCaption = styled.p`
    font-weight: 300;
    font-size: 0.8em;
    float: left;
    margin: 0;
`;

const TextItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px #41414166 solid;
    padding-left: 0.9em;
    margin: 0 0 1em 0;
    align-self: stretch;
`;

const TextItem = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8em;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0 0.4em 0;
    margin: 0;
`;

const Header = (props) => {
    return (
        <HeaderWrapper>
            <TextHeader>{props.role}</TextHeader>
            <TextCaption>{props.date}</TextCaption>
        </HeaderWrapper>
    );
}

const Experience = () => {
    return (
        <ExperienceWrapper>
            <ExperienceItem image={dreamlandImage} title="Dreamland Café" body={
                <ExperienceBody>
                    <Header role="Bartender / Busser" date="Expected March 2020" />
                    <TextItemWrapper>
                        <TextItem>Prepare and serve alcoholic drinks</TextItem>
                    </TextItemWrapper>
                    <Header role="Busser" date="March 2019 - Present" />
                    <TextItemWrapper>
                        <TextItem>- Assist servers in the preparation of drinks and other tasks</TextItem>
                        <TextItem>- Serve food and refill beverages</TextItem>
                        <TextItem>- Greet and seat customers upon their arrival</TextItem>
                        <TextItem>- Clear and set up tables in an orderly manner</TextItem>
                    </TextItemWrapper>
                </ExperienceBody>
                } url="https://www.dreamlandcafe.ca"></ExperienceItem>
            <ExperienceItem image={nokiaImage} title="Nokia" date="July 2019 - August 2019" body={
                <ExperienceBody>
                    <Header role="Future Tech Intern" date="July 2019 - August 2019" />
                    <TextItemWrapper>
                        <TextItem>- Worked on REST API scripting integration</TextItem>
                        <TextItem>- Wrote Bash scripts that interfaces with their IAM service to reduce human intervention</TextItem>
                        <TextItem>- Wrote automation scripts using AutoIt for quicker development</TextItem>
                    </TextItemWrapper>
                </ExperienceBody>
            } url="https://www.nokia.com"></ExperienceItem>
            <ExperienceItem image={digiteraImage} title="Digitera Interactive" body={
                <ExperienceBody>
                    <Header role="Android Developer" date="February 2019 - Present" />
                    <TextItemWrapper>
                        <TextItem>- Working on the Crowdfluence project</TextItem>
                    </TextItemWrapper>
                    <Header role="Android Developer (Co-op)" date="September 2018 - February 2019" />
                    <TextItemWrapper>
                        <TextItem>- Developed Android apps using Android Studio and React Native</TextItem>
                        <TextItem>- Published an Android app to the Google Play Store</TextItem>
                    </TextItemWrapper>
                </ExperienceBody>
            } url="https://www.digitera.agency"></ExperienceItem>
        </ExperienceWrapper>
    );
}

export default Experience;