import React from 'react';
import { Outlet } from 'react-router-dom';

export const ROUTS = 
{
    home:'landing/page',
    about:'about',
    doc:'document',
    comments:'comments',
    logIn:'logIn'
}
const Root = () => {

    return (
        <div>
            <ul>
                <li><a href={ROUTS.about}>About</a></li>
                <li><a href={ROUTS.doc}>Doc</a></li>
                <li><a href={ROUTS.comments}>Comments</a></li>
                <li><a href={ROUTS.logIn}>LogIn</a></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Root;
