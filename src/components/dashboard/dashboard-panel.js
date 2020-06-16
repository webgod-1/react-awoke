import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE_ROOT } from '../../utils/constants';

const ROOT = ROUTE_ROOT + '/dashboard/user/id';

const DashboardPanelWrapper = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
  margin: 10px 0 0 10px;
  padding-right: 25px;
  text-align: left;
  color: white;
  flex-basis: 18%;
  overflow-x: hidden;
`;

const PanelBoxes = styled.div`
  padding: 15px 30px;
  border-radius: 30px;
  margin-bottom: 20px;
  height: 81px;

  &.active {
    background-color: white;
    color: black;

    &:hover {
      background-color: white;
    }
  }

  &:hover {
    background-color: #2b3a81;
    cursor: pointer;
  }

  .user-title {
    font-size: 24px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-title {
    font-size: 20px;
    margin-top: 10px;
  }
`;

function DashboardPanel() {
  const history = useHistory();
  const [active, setActive] = useState('overview');

  useEffect(() => {
    history.push(`${ROOT}/${active}`);
  }, [active, history]);

  return (
    <DashboardPanelWrapper>
      <PanelBoxes
        style={{
          height: '185px',
          backgroundColor: '#F98229',
          padding: '25px 30px',
        }}
      >
        <p className="user-title"> ID&nbsp;#1869245781</p>
        <p className="user-title"> John&nbsp;Doe</p>
        <p className="user-title"> New&nbsp;York,&nbsp;NY</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="overview"
        className={active === 'overview' ? 'active' : ''}
        onClick={() => setActive('overview')}
      >
        <p className="menu-title">Overview</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="expense"
        className={active === 'expense' ? 'active' : ''}
        onClick={() => setActive('expense')}
      >
        <p className="menu-title">Expense</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="income"
        className={active === 'income' ? 'active' : ''}
        onClick={() => setActive('income')}
      >
        <p className="menu-title"> Income</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="credit"
        className={active === 'credit' ? 'active' : ''}
        onClick={() => setActive('credit')}
      >
        <p className="menu-title"> Credit</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="simulation"
        className={active === 'simulation' ? 'active' : ''}
        onClick={() => setActive('simulation')}
      >
        <p className="menu-title"> Simulation</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="stressTesting"
        className={active === 'stressTesting' ? 'active' : ''}
        onClick={() => setActive('stressTesting')}
      >
        <p className="menu-title"> Stress Testing</p>
      </PanelBoxes>
    </DashboardPanelWrapper>
  );
}

export default DashboardPanel;
