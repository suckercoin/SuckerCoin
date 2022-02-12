import * as React from 'react';
import { useState } from 'react';
import './ConnectButton.css';

export function ConnectButton() {
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

    function onConnectButtonClick() {

    }

    return (
        <div className="connect-button" onClick={onConnectButtonClick}>
            Connect
        </div>
    );

}
