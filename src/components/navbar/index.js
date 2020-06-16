import React from 'react'
import { Menu, Button, Icon, Sidebar } from 'semantic-ui-react';
import { Link, withRouter } from "react-router-dom";

import { ROUTE_ROOT } from "../../utils/constants";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            activeItem: (props && props.location && props.location.pathname && this.props.location.pathname.replace("/altdatana-react/", "")) || 'home', 
            mobileNavVisible: false,
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name, mobileNavVisible: false })

    render() {
        const { activeItem, mobileNavVisible } = this.state;
 
        return (
            <nav className="sticky" id="navbar">
                <Menu secondary id="primary-menu">
                    <h1>Company Logo</h1>
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/`}
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        id="home"
                        name="home"
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/about`}
                        name="about"
                        active={activeItem === "about"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/how-it-works`}
                        name="how-it-works"
                        active={activeItem === "how-it-works"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/products`}
                        name="products"
                        active={activeItem === "products"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/dashboard`}
                        name="dashboard"
                        active={activeItem === "dashboard"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="sign up"
                            // active={activeItem === "signup"}
                            onClick={this.handleItemClick}
                            as={Link}
                            to={`${ROUTE_ROOT}/signup`}
                        >
                            <Button className="primary-button">
                                Get Started
                            </Button>
                        </Menu.Item>
                        <Menu.Item
                            name="login"
                            as={Link}
                            active={activeItem === "login"}
                            onClick={this.handleItemClick}
                            className="login"
                            to={`${ROUTE_ROOT}/login`}
                        >
                            Log In
                        </Menu.Item>

                        <Menu.Item
                            className="mobile-btn"
                            name="mobile"
                            onClick={() =>
                                this.setState(
                                    {
                                        mobileNavVisible: !mobileNavVisible,
                                    },
                                    () => console.log(mobileNavVisible)
                                )
                            }
                        >
                            <Icon name="bars" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <div className="mobile-nav">
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        vertical
                        direction="right"
                        visible={mobileNavVisible}
                        width="very wide"
                    >
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/`}
                            name="home"
                            active={activeItem === "home"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/about`}
                            name="about"
                            active={activeItem === "about"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/how-it-works`}
                            name="how-it-works"
                            active={activeItem === "how-it-works"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/products`}
                            name="products"
                            active={activeItem === "products"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/dashboard`}
                            name="dashboard"
                            active={activeItem === "dashboard"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="login"
                            as={Link}
                            active={activeItem === "login"}
                            to={`${ROUTE_ROOT}/login`}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="signup"
                            as={Link}
                            active={activeItem === "signup"}
                            onClick={this.handleItemClick}
                            to={`${ROUTE_ROOT}/signup`}
                        />
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={mobileNavVisible}
                        onClick={() =>
                            this.setState({ mobileNavVisible: false })
                        }
                    ></Sidebar.Pusher>
                </div>
            </nav>
        );
    }

}


export default withRouter(NavBar);
