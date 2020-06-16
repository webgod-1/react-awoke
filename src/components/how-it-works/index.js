import React from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import tempimg from '../../images/temp.png';
import blob from '../../images/how-blob.png';
import circle from '../../images/how-circle.png';

const HowItWorksWrapper = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: -85px;

    .blob-bump {
        width: 100%;
        height: 200px;
        position: absolute;
        top: 0;
        background-color: #FEE6D4;
        z-index: -1;
    }

    .blob {
        position: absolute;
        top: 150px;
        right: 0;
        z-index: -1;
        width: 100%;
        background-image: url(${blob});
        width: 100vw;
        height: 2000px;
        background-position: top;
        background-repeat: no-repeat;
        background-size: contain
    }

    @media screen and (max-width: 750px) {
        margin-top: 0;
    }
    @media screen and (max-width: 400px) {
        .blob-bump { height: 50vh; }
        .blob { top: 50vh; }
    }
`;

const HowItWorksSectionTitle = styled.section`
    .flex-box { align-items: center; }

    .item.right {
        flex-basis: 50%;
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 750px) {
        text-align: center;

        .flex-box {
            flex-wrap: wrap;
        }

        .item { 
            flex-basis: 100%;

            // img { display: none; }
        }
    }
    @media screen and (max-width: 400px) {
        height: 70vh;
    }
`;

const HowItWorksSectionContent = styled.section`
    text-align: left;
    max-width: 900px;
    margin: auto;

    .flex-box {
        justify-content: space-around;
        align-items: center;
        margin: 40px 80px 40px 0;

        &.flip {
            text-align: right;
            margin: 40px 0 40px 80px;
        }
    }

    .item { 
        padding: 20px;
    }
    
    .step-header { 
        font-size: 24px; 
        margin: 0;
        line-height: 2;
    }

    .how-circle { 
        width: 150px;
        height: 150px;
        background-image: url(${circle});
        background-position: center;
        background-size: contain
    }

    @media screen and (max-width: 900px) {
        .step-header { font-size: 1.75em; }
        .flex-box, .flex-box.flip {
            margin: 40px auto;
            justify-content: start;
        }
    }
    @media screen and (max-width: 600px) {
        .flex-box {
            flex-wrap: wrap;
            &.flip { flex-wrap: wrap-reverse; }
        }

        .item { 
            flex-basis: 100%;
            text-align: center;

            .how-circle  { 
                margin: auto;
            }
        }
    }
`;

const HowItWorks = () => (
    <HowItWorksWrapper id="how-it-works">
        <div className="blob-bump"></div>
        <div className="blob"></div>
        <div className="container">
            <HowItWorksSectionTitle>
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2>How It Works</h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </HowItWorksSectionTitle>
            <HowItWorksSectionContent>
                <div className="flex-box">
                    <div className="item left">
                        <div className="how-circle"></div>
                    </div>
                    <div className="item right">
                        <h3 className="step-header">Step 1</h3>
                        <p>Generate and send a unique link to your borrower/client to get their approval.</p>
                    </div>
                </div>
                <div className="flex-box flip">
                    <div className="item left">
                        <h3 className="step-header">Step 2</h3>
                        <p>Your borrower/client logs into their normal accounts, fully encrypted. <br/>
                         We don’t see or keep the password and usernames.</p>
                    </div>
                    <div className="item right">
                        <div className="how-circle"></div>
                    </div>
                </div>
                <div className="flex-box">
                    <div className="item left">
                        <div className="how-circle"></div>
                    </div>
                    <div className="item right">
                        <h3 className="step-header">Step 3</h3>
                        <p>The raw data enters our platform, and we give you the results.</p>
                    </div>
                </div>
                <div className="flex-box flip">
                    <div className="item left">
                        <h3 className="step-header">Step 4</h3>
                        <p>Link our API with your internal underwriting systems, or manually observe and customize your dashboards. </p>
                    </div>
                    <div className="item right">
                        <div className="how-circle"></div>
                    </div>
                </div>
            </HowItWorksSectionContent>
        </div>
        <CallToAction type="question"/>
    </HowItWorksWrapper>
);

export default HowItWorks;