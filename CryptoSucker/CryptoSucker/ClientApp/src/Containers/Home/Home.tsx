import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home-main">
            <h1>Do you spend all day trying to find the best crypto coins?</h1>
            <h1>Is your portfolio full of shit coins, waiting for them to go 1000x?</h1>
            <h1>Do your close people consider you as a  </h1>
            <h1>CRYPTO SUCKER? </h1>
            <h1>Don't get dissapointed. Buy the coin specifically for crypto suckers!</h1>

            <Link to="/buy">Click here</Link>
        </div>
    );
}
