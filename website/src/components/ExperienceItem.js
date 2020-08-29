import React, { useState, useEffect } from "react";
import styled from "styled-components";

import WebsiteLink from "./WebsiteLink";

const ExperienceContainer = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: row;
    justify-content: stretch;
    padding: 0;
    margin: 0 10vw 4em 10vw;
`;

const ExperienceText = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    font-size: 1.4em;
    font-weight: 500;
    color: #414141;
    margin: 0 0 18px 0;
    padding: 0;
`;

const ExperienceTitle = styled(ExperienceText)`
    font-family: "Raleway";
    font-weight: 800;
    font-size: 2em;
    margin: 0 0 0.5em 0;
`;

const ExperienceTextContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-left: 2em;
`;

const ExperienceImage = styled.img`
    clip-path: circle(at center);
    height: 18vh;
    -webkit-user-drag: none;
    user-drag: none;
`;

const ExperienceItem = (props) => {
    return (
        <ExperienceContainer>
            <ExperienceImage src={props.image} />
            <ExperienceTextContentWrapper>
                <ExperienceTitle>{props.title}</ExperienceTitle>
                {/* <ExperienceCaption>{props.date}</ExperienceCaption> */}
                {props.body}
                <WebsiteLink url={props.url}/>
            </ExperienceTextContentWrapper>
        </ExperienceContainer>
    );
}

export default ExperienceItem;