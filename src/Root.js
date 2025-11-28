import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import './App.css';


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
        <div className='rootContainer'>
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
                    <li>
                        <p className="material-symbols-outlined">home</p>
                        <a href={ROUTS.about}>Home</a>
                    </li>
                   
            
                    <li>
                        <a href={ROUTS.doc}>Popular</a>
                    </li>
                    <li><a href={ROUTS.comments}>answer</a></li>
                    <li><a href={ROUTS.logIn}>Explore</a></li>
                </ul>
                <hr />
                <div>
                <ul>
                    <h3>Resources</h3>
                    <li><a href={ROUTS.about}>About Reddit</a></li>
                    <li><a href={ROUTS.doc}>advertise</a></li>
                    <li><a href={ROUTS.comments}>Comments</a></li>
                    <li><a href={ROUTS.logIn}>Developer Platform</a></li>
                    <li><a href={ROUTS.logIn}>Help</a></li>
                </ul>  
                </div>
            </div>

            <div className='postContainer'>
                <Outlet />
            </div>
           
           
        </div>
    )
}

export default Root;
