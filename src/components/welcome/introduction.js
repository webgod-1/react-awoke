import React from 'react';
import styled from 'styled-components';

import bg from '../../images/slant-bg.png';
import introimg from '../../images/introimg2.png';

const IntroductionWrapper = styled.section`
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;

  .blob {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${bg});
    width: 100vw;
    height: 90vh;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main-img {
    position: absolute;
    bottom: 13px;
    right: 0;
    width: 60vw;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .flex-box {
    align-items: center;
    flex-direction: row-reverse;
    height: 100%;
    margin: auto;
  }

  h2 {
    text-transform: capitalize;
  }

  .left {
    text-align: left;
    color: $primary-blue;
  }

  .right {
    img {
      width: 100%;
    }
    flex-basis: 40%;
  }

  @media screen and (max-width: 900px) {
    .item.left {
      flex-basis: 60%;
    }
    .item.right {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 0;

    .flex-box {
      display: block !important;
    }

    .item {
      margin: 0;
    }

    .item.right {
      margin: auto;

      img {
        max-width: 300px;
        margin-top: 50px;
      }
    }

    .item.left {
      text-align: center;
    }
  }

  @media screen and (max-width: 320px) {
    padding-top: calc(50vh - 200px);

    img {
      display: none;
    }
  }
`;

// TODO: FIX BLOB LATER

const Intro = () => (
  <IntroductionWrapper>
    <div className="blob"></div>
    <img
      className="main-img"
      src={introimg}
      alt="astronaunt floating in space"
    />
    <div className="flex-box two-items container">
      <div className="item right">
        <div></div>
      </div>
      <div className="item left">
        <h2>We are underwriting the future</h2>
        <p>Introducing alternative data to lenders small or large.</p>
      </div>
    </div>
  </IntroductionWrapper>
);

export default Intro;
