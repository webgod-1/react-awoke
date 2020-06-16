import React from "react";
import styled from "styled-components";

import { Button } from "semantic-ui-react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const CallToActionSection = styled.section`
    background-color: #384586;
    margin: auto;

    padding: 25vh 0;

    h3 {
        margin-bottom: 40px;
        text-transform: capitalize;
    }
`;

const CtaBtnWrapper = styled.div`
    width: 425px;
    display: flex;
    justify-content: space-between;
    margin: auto;

    @media screen and (max-width: 500px) {
        width: 100%;
        justify-content: space-around;

        button {
            width: 130px!important;
        }
    }
`;

export default class CTA extends React.Component {
    render() {

        return (
            <CallToActionSection id="call-to-action">
                <div className="container">
                    <Controller>
                        <Scene triggerElement="#call-to-action" duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                <h3 className="white">Have more questions?</h3>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement="#call-to-action" duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <CtaBtnWrapper>
                                        <Button className="primary-button bigger">
                                            Apply Now
                                        </Button>
                                        <Button className="secondary-button bigger">
                                            Learn More
                                        </Button>
                                    </CtaBtnWrapper>
                                </Tween>
                            )}
                        </Scene>   
                    </Controller>
                </div>
            </CallToActionSection>
        );
    }
}
