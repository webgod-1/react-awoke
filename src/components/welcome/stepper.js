import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../../images/btn-arrow-orange.png";

const StepperDiv = styled.section`
    h3 {
        text-align: left;
        margin-bottom: 50px;
    }

    h5 {
        font-size: 22px;
        margin-bottom: 30px;
    }

    a {
        color: #f98229;
        position: absolute;
        bottom: 40px;
        font-weight: bold;

        &::after {
            content: "";
            width: 13px;
            height: 13px;
            position: absolute;
            background-image: url(${icon});
            background-size: cover;
            background-position: center;
            left: 90px;
            top: 10px;
            transform: translateY(-50%);
        }
    }

    .step {
        background-color: white;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-radius: 10px;

        padding: 130px 30px 90px;
        position: relative;

        flex-basis: 33.3%;
        margin: 15px;

        color: black;

        .stepper-img {
            img {
                width: 60px;
            }
        }

        &:hover {
            box-shadow: 10px 10px 8px $hover-grey;
        }
    }

    @media screen and (max-width: 900px) {
        .step-box {
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .step {
            padding: 40px 30px 50px;
            flex-basis: 45%;
        }

        a {
            bottom: 25px;
        }
    }

    @media screen and (max-width: 650px) {
        
        h5 {
            font-size: 16px;
            margin: 20px 0;
        }
        .step-box {
            display: inline-block !important;
        }
        .step {
            margin: 15px 0;
        }
    }
`; 

const Stepper = () => ( 
    <StepperDiv className="bg-navy">
        <div className="container">
            <h3 className="white">Smarter Decisions, <br/>Backed By Powerful Data</h3>
            <div className="flex-box step-box">
                <div className="step item">
                    <div className="stepper-img">
                    </div>
                    <h5>Easy Setup and Onboarding</h5>
                    <p>
                        Whether you integrate our API into your business ecosystem, or use our interface to face your client, our onboarding team is here for you.
                    </p>
                    <Link >Get Started</Link>
                </div>
                <div className="step item">
                    <div className="stepper-img">
                    </div>
                    <h5>Encryption and Security</h5>
                    <p>
                        We don’t keep the borrower’s data, and we encrypt everything to ensure only your team has access. 
                    </p>
                    <Link >Get Started</Link>
                </div>
                <div className="step item">
                    <div className="stepper-img">
                    </div>

                    <h5>Complete Customization</h5>
                    <p>
                        Create a credit application through us, or simply use our analyticals for your underwriting 
                    </p>
                    <Link >Get Started</Link>
                </div>
            </div>
        </div>
    </StepperDiv>
);

export default Stepper;

