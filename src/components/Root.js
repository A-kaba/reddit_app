import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from './SearchForm';
import '../App.css';

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
        <div className='container'>
            <div className='searchBar'>
                <div className='logo'>logo</div>
                <div className='searchForm'>
                    <SearchForm/>
                </div>
                
                <div className='login logoNlogin'>
                    <button>LogIn</button>
                    <button>....</button>
                    
                </div>
            </div>

            <div className='sideBar'>

                <ul>
                    <li><a href={ROUTS.about}>About</a></li>
                    <li><a href={ROUTS.doc}>Doc</a></li>
                    <li><a href={ROUTS.comments}>Comments</a></li>
                    <li><a href={ROUTS.logIn}>LogIn</a></li>
                </ul>
                <hr />
                <div>
                <ul>
                    <h3>Resources</h3>
                    <li><a href={ROUTS.about}>About</a></li>
                    <li><a href={ROUTS.doc}>Doc</a></li>
                    <li><a href={ROUTS.comments}>Comments</a></li>
                    <li><a href={ROUTS.logIn}>LogIn</a></li>
                </ul>  
                </div>
            </div>

            <div className='postSection'>
                <Outlet />
            </div>
           
           
        </div>
    )
}

export default Root;
