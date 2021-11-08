import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Hello, Sucker!</h1>
            <p>Do you want to buy Sucker coin? </p>
            <Link to="/buy">Click here</Link>
        </div>
    );
}
