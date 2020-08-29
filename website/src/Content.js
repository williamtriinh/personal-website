import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll, useMotionValue, useTransform } from "framer-motion";

import Experience from "./components/Experience";
import Contact from "./components/Contact";

const NavigationBarText = styled.p`
    -webkit-text-fill-color: ${props => props.isActive ? "#414141" : "transparent"};
    -webkit-text-stroke: ${props => props.isActive ? "none" : "1.2px #41414166"};
    font-family: "Roboto";
    font-size: 2.5em;
    font-weight: 900;
    &:hover {
        cursor: pointer;
    }
`;

const NavigationBarButton = (props) => {
    return (
        <NavigationBarText isActive={props.isActive} onClick={props.onClick}>{props.text}</NavigationBarText>
    );
}



const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 0 2em;
`;

const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 24px;
`;

const Content = () => {
    const { scrollYProgress } = useViewportScroll();

    const tabComponents = [
        <Experience/>,
        null,
        <Contact/>
    ];
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}>
            <Column id="content">
                <NavigationBar>
                    <NavigationBarButton isActive={currentTab === 0 ? true : false} text={"Experience"} onClick={() => { setCurrentTab(0) }} />
                    <NavigationBarButton isActive={currentTab === 1 ? true : false} text={"Projects"} onClick={() => { setCurrentTab(1) }} />
                    <NavigationBarButton isActive={currentTab === 2 ? true : false} text={"Contact"} onClick={() => { setCurrentTab(2) }} />
                </NavigationBar>
                {tabComponents[currentTab]}
            </Column>
        </motion.div>
        
    );
}

export default Content;