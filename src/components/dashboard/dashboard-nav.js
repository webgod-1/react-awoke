import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE_ROOT } from '../../utils/constants';

const ROOT = ROUTE_ROOT + '/dashboard';

const DashboardNavWrapper = styled.nav`
  a.item {
    color: white !important;
    text-transform: unset;
  }

  .dashboard-item:hover,
  .dashboard-item.active {
    color: #f98229 !important;
    border-bottom: 1px solid !important;
    border-radius: 0 !important;
  }

  #primary-menu {
    max-width: none !important;
  }
`;

class DashboardNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem:
        (props &&
          props.location &&
          props.location.pathname &&
          this.props.location.pathname.replace(
            '/altdatana-react/dashboard/',
            '',
          )) ||
        'shop',
    };
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, mobileNavVisible: false });

  render() {
    const { activeItem } = this.state;

    return (
      <DashboardNavWrapper className="sticky" id="dashboard-nav">
        <Menu secondary id="primary-menu">
          <Menu.Item
            as={Link}
            to={`${ROUTE_ROOT}/`}
            name="Home"
            onClick={this.handleItemClick}
          >
            <h1>Company Logo</h1>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={`${ROOT}/lender`}
            style={{ marginLeft: 100 }}
            name="LENDER HOMEPAGE"
            className="dashboard-item"
            active={activeItem === 'lender'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={`${ROOT}/user/id`}
            name="USER 1869245781"
            className="dashboard-item"
            active={activeItem === 'user'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              as={Link}
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              className="login"
              to={`${ROUTE_ROOT}/login`}
            >
              <Image src="/images/wireframe/square-image.png" avatar />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </DashboardNavWrapper>
    );
  }
}

export default withRouter(DashboardNav);
