import React from "react";
import styled from "styled-components";

import websiteIcon from "../website.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    &:hover {
        cursor: pointer;
    }
`;

const Hyperlink = styled.a`
    text-decoration: none;
`;

const Text = styled.p`
    font-family: "Roboto";
    font-size: 1em;
    font-weight: 500;
    color: #C36380;
    margin-left: 8px;
`;

const WebsiteLink = (props) => {
    return (
        <Hyperlink href={props.url} target="_blank">
            <Wrapper>
            <img src={websiteIcon}/>
            <Text>Website</Text>
            </Wrapper>
        </Hyperlink>
    );
};

export default WebsiteLink;