import React from 'react';
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import tempimg from '../../images/temp.png';
import { Link } from "react-router-dom";
import { ROUTE_ROOT } from "../../utils/constants";

const IntroMissionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;

    text-align: left;

    height: 100vh;
    width: 100%;
    text-align: left;

    h2 {
        font-size: 42px;
    }

    h3 {
        text-transform: capitalize;
    }

    .left {
        align-self: center;
        margin-bottom: 30px;
        margin-right: 10%;
        flex-basis: 50%;

        img {
            width: 100%;
        }
    }
    .right {
        align-self: center;
        flex-basis: 50%;
    }

    .button {
        margin: 20px 0;
    }


    @media screen and (max-width: 850px) {
        padding-left: 30px;
        padding-right: 30px;
        
        .flex-box {
            flex-direction: column;
        }

        .right {
            text-align: center;
        }

        .left { 
            margin: -20px 0 0; 

            img {
                max-width: 450px;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 450px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const QuickInfo = () => (
    <IntroMissionSection className="mission">
        <div className="flex-box container">
            <div className="item left">
                <img src={tempimg} alt="temporary img" />
            </div>
            <div className="item right">
                <h3>Understand your client</h3>
                <p>
                    Each dashboard lets you analyze your borrower’s financial activity, repayment activity, and probability of delinquency or default. Understand the velocity of their expenses, or the volatility of a borrower’s income to boost your underwriting. 
                </p>
                <Button className="primary-button fullscreen-btn" as={Link} to={`${ROUTE_ROOT}/dashboard`}>See an Example</Button>
            </div>
        </div>
    </IntroMissionSection>
) 

export default QuickInfo;