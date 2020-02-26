import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useAnimation } from "framer-motion";

import headshotImage from "../src/williamtrinh.jpg";
import dropDown from "../src/arrow_drop_down.svg";

const Section = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0 2em;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    }
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
`;

const LandingTextWrapper = styled.div`
    position: relative;
`;

const LandingTextHighlight = styled.span`
    background: linear-gradient(180deg, #FFF 60%, #F1D7DF 40%);
`;

const LandingText = styled.p`
    font-family: "Roboto";
    font-size: 2em;
    font-weight: 500;
    color: #414141;
`;

const DropDown = styled.img`
    width: 48px;
    height; 48px;
    &:hover {
        cursor: pointer;
    }
    fill: pink;
    margin-bottom: 1em;
`;

const Headshot = styled.img`
    clip-path: circle(at center);
    height: 40vh;
    margin-left: 2em;
    @media (max-width: 700px) {
        margin-left: 0;
    }
    user-drag: none;
    -webkit-user-drah: none;
`;

const Landing = () => {

    return (
        <Section>
            <Wrapper>
                <motion.div
                    initial={{
                        y: "100px",
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 1
                    }}>
                    <LandingTextWrapper>
                    <LandingText>Hi! My name is William Trinh.</LandingText>
                </LandingTextWrapper>
                </motion.div>

                <motion.div
                    initial={{
                        y: "100px",
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 1
                    }}>
                        <Headshot src={headshotImage}></Headshot>
                </motion.div>
                
            </Wrapper>
            <DropDown src={dropDown} onClick={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}></DropDown>
        </Section>
    );
};

export default Landing;