import React, { useEffect } from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import tempimg from '../../images/temp.png';
import blob from '../../images/about-blob.png';

const AboutWrapper = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: -85px;

    .bg-blob {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        background-image: url(${blob});
        width: 700px;
        height: 700px;
        background-size: contain;
        background-position: top;
        background-repeat: no-repeat;
        max-width: 60vw;
    }
    @media screen and (max-width: 750px) { 

        .bg-blob { display: none; }
    }
`;

const AboutSectionTitle = styled.section`
    margin-top: 70px;

    .flex-box { align-items: center; }

    .item.right {
        flex-basis: 50%;
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 750px) {
        text-align: center;

        &~& {
            padding-top: 0;
        }
        .flex-box {
            flex-wrap: wrap-reverse;
        }

        .item { 
            flex-basis: 100%;

            img { max-width: 300px;}
        }

        h2 { color: white; }

        border-radius: 100%/0 0 100px 100px;
        box-shadow: 0 6px 0 #384586;
        background-color: #384586;
        margin-left: -15px;
        margin-right: -15px;
    }
`;
const AboutSectionMid = styled.section`
    max-width: 700px;
    margin: auto;

    h3 { font-size: 48px;}

    @media screen and (max-width: 900px) {
        h3 { font-size: 2.5em; }
    }    
    @media screen and (max-width: 400px) {
        h3 { 
            font-size: 25px; 
            margin: 50px auto;
        }
        padding-bottom: 0;
    }    
`;
const AboutSectionContent = styled.section`
    text-align: left;

    .flex-box {
        justify-content: space-between;
        align-items: center;
    }
    .item { 
        flex-basis: 50%;
        padding: 20px;
    }

    .content-header { font-size: 30px; }

    img { width: 100%;}

    @media screen and (max-width: 900px) {
        .content-header { font-size: 2em; }
    }
    @media screen and (max-width: 750px) {
        text-align: center;

        &~& {
            padding-top: 0;
        }
        
        .flex-box {
            flex-wrap: wrap;

            &.flip { flex-wrap: wrap-reverse; }
            
            .item { 
                flex-basis: 100%;
    
                img { max-width: 300px;}
            }
        }

    }
`;

const About = () => {
    useEffect(() => {
        console.log('scrolling')
        window.scrollTo(0, 0)
    }, [])

    return (
    <AboutWrapper id="about">
        <div className="bg-blob"></div>
        <div className="container">
            <AboutSectionTitle>
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2> About us</h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </AboutSectionTitle>
            <AboutSectionMid>
                <h3> We love data, and we think the world should too.</h3>
            </AboutSectionMid>
            <AboutSectionContent>
                <div className="flex-box flip">
                    <div className="item left">
                        <h3 className="content-header">Our Goals</h3>
                        <p>While large institutions spend millions of dollars on development and underwriting technology, small lenders and credit unions are left to continue using credit scores, W2s, and pay stubs, to understand a borrower’s financial risk.</p>
                        <p>We are here to provide a solution to modernize underwriting in a big way, without needing to develop an R&D department, for every institution that faces lending risk.</p>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </AboutSectionContent>
            <AboutSectionContent>
                <div className="flex-box">
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item left">
                        <h3 className="content-header">Our Experience</h3>
                        <p>We are a team made up of credit analysts, risk managers, actuaries, attorneys, data scientists, and investment bankers. We’ve been at the forefront of institutional risk management on all sides of the street. </p>
                    </div>
                </div>
            </AboutSectionContent>
        </div>
        <CallToAction type="question"/>
    </AboutWrapper>
    )
};

export default About;