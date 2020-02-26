import React from "react";
import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactLinks = styled.a`
    text-decoration: none;
    font-family: "Roboto";
    font-weight: 500;
    color: #C36380;
    font-size: 1.4em;
    margin: 16px 0;
`;

const Contact = () => {
    return (
        <Column>
            <ContactLinks href="https://www.linkedin.com/in/william-trinh/" target="_blank">Linkedin</ContactLinks>
            <ContactLinks href="https://github.com/williamtriinh" target="_blank">Github</ContactLinks>
        </Column>
    );
}

export default Contact;