import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OverView from './overview/OverView';
import Expense from './Expense';
import Income from './Income';
import Credit from './Credit';
import Simulation from './Simulation';
import StressTesting from './StressTesting';

const ROOT = window.location.pathname;

const DashboardMainWrapper = styled.div`
  @media screen and (max-width: 1100px) {
    flex-basis: 101%;
  }
  flex-basis: 82%;
  position: relative;
  margin-top: 10px;
  margin-right: -10px;
  margin-bottom: -10px;
  padding: 10px;
  border: 1px solid white;
  background-color: white;
  border-radius: 50px 0 0 0;
  text-align: left;
`;

const DashboardContainer = styled.div`
  margin: 40px 40px 0;

  h3 {
    font-size: 30px;
  }
`;

function DashboardMain() {
  const [dashboardUrl, setDashboardUrl] = useState(ROOT);

  useEffect(() => {
    let getUrl = window.location.pathname;
    getUrl = getUrl.split('/');
    setDashboardUrl(getUrl[getUrl.length - 1]);
  }, [window.location.pathname]);

  return (
    <DashboardMainWrapper>
      <DashboardContainer>
        {dashboardUrl === 'overview' ? (
          <OverView />
        ) : dashboardUrl === 'expense' ? (
          <Expense />
        ) : dashboardUrl === 'income' ? (
          <Income />
        ) : dashboardUrl === 'credit' ? (
          <Credit />
        ) : dashboardUrl === 'simulation' ? (
          <Simulation />
        ) : (
          <StressTesting />
        )}
      </DashboardContainer>
    </DashboardMainWrapper>
  );
}

export default DashboardMain;
