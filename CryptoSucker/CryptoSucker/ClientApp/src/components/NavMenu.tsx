import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu() {
    //const displayName = NavMenu.name;

    const [collapsed, setCollapsed] = useState(true);

    //constructor (props) {
    //  super(props);

    //  this.toggleNavbar = this.toggleNavbar.bind(this);
    //  this.state = {
    //    collapsed: true
    //  };
    //}

    //toggleNavbar () {
    //  this.setState({
    //    collapsed: !this.state.collapsed
    //  });
    //}


    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>

                <div className="navmenu-container">
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/buy">Buy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/nfts">Nfts</NavLink>
                        </NavItem>
                    </ul>
                </div>

            </Navbar>
        </header>
    );

}
