import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


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
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                        <a href={ROUTS.about}>Home</a>
                    </li>
                   
            
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-fire" />
                        <a href={ROUTS.doc}>Popular</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-regular fa-circle-question" />
                        <a href={ROUTS.comments}>answer</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-brands fa-wpexplorer" />
                        <a href={ROUTS.logIn}>Explore</a>
                    </li>
                </ul>
                <hr />
                <div>
                <ul>
                    <h3>Resources</h3>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-address-card" />
                        <a href={ROUTS.about}>About Reddit</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-rectangle-ad" />
                        <a href={ROUTS.doc}>advertise</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-regular fa-comment" />
                        <a href={ROUTS.comments}>Comments</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-brands fa-connectdevelop" />
                        <a href={ROUTS.logIn}>Developer Platform</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-regular fa-circle-question" />
                        <a href={ROUTS.logIn}>Help</a>
                    </li>
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
