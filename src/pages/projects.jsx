import React, { useState } from "react";
import styled, { css } from "styled-components";
import Circles from "../../images/circles_0001.png";
import Cityscape from "../../images/cityscape_0001.png";

const ProjectsContainer = styled.div`
    margin: 0 70px 25px 70px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        margin: 0 20px 25px 20px;
    }
`;

const Header = styled.h1`
    ${(props) =>
        props.main &&
        css`
            font-size: 70px;
            margin-bottom: 20px;

            @media screen and (max-width: 900px), (max-height: 640px) {
                font-size: 50px;
            }
        `}

    ${(props) =>
        props.project &&
        css`
            font-size: 55px;
            margin-bottom: 20px;

            @media screen and (max-width: 900px), (max-height: 640px) {
                font-size: 35px;
            }
        `}
`;

const Description = styled.p`
    ${(props) =>
        props.main &&
        css`
            font-size: 40px;
            margin-bottom: 80px;
            line-height: 1.5;

            @media screen and (max-width: 900px), (max-height: 640px) {
                font-size: 25px;
            }
        `}

    ${(props) =>
        props.project &&
        css`
            font-size: 30px;
            margin-bottom: 20px;
            line-height: 1.5;

            @media screen and (max-width: 900px), (max-height: 640px) {
                font-size: 20px;
            }
        `}
`;

const ProjectImage = styled.img`
    border-style: solid;
    border-color: black;
    margin: 0 auto 100px auto;
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
`;

const BreatheButton = styled.button`
    border: 3px solid #048c24;
    border-radius: 100px;
    background-color: #90fca9;
    color: #048c24;
    padding: 20px 40px;
    transition: font-size 7s;
    font-size: ${(props) => props.inputFont}px;
    margin: 100px auto 100px auto;
    display: block;
    max-width: 100%;
    overflow-x: hidden;

    @media screen and (max-width: 900px), (max-height: 640px) {
        padding: 5px 10px;
        margin: 70px auto 70px auto;
    }
`;

let increase = true;

function Projects() {
    const [size, setSize] = useState(20);
    let browserWidth = window.innerWidth;
    let browserHeight = window.innerHeight;
    let maxFontSize = 150;
    let change = 130;
    let changeValue = 130;
    let buttonText = "BREATHE IN";

    if (browserWidth <= 900 || browserHeight <= 640) {
        maxFontSize = 43; // mobile
        changeValue = 23; // mobile
    } else {
        maxFontSize = 150; // desktop
        changeValue = 130; // desktop
    }

    if (size <= 20) {
        increase = true;
    }
    if (size >= maxFontSize) {
        increase = false;
    }

    if (increase) {
        change = changeValue;
        buttonText = "BREATHE OUT";
    }
    if (!increase) {
        change = -changeValue;
        buttonText = "BREATHE IN";
    }

    return (
        <ProjectsContainer>
            <Header main>Projects</Header>
            <Description main>
                Here you can find some projects that I am working on.
            </Description>
            <Header project>Processing:</Header>
            <Description project>Growing and Shrinking Bubbles</Description>
            <ProjectImage src={Circles} alt="500 colorful bubbles" />
            <Description project>Scrolling Cityscape</Description>
            <ProjectImage src={Cityscape} alt="Cityscape with sunset" />
            <Header project>Miscellaneous:</Header>
            <Description project>
                Press the button. As the button expands, breathe in and let your
                lungs expand. Press the button again. As it shrinks, breathe out
                and let your body decompress. Repeat and relax.
            </Description>
            <BreatheButton
                inputFont={size}
                onClick={() => setSize(size + change)}
            >
                {buttonText}
            </BreatheButton>
        </ProjectsContainer>
    );
}

export default Projects;
