import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { selectRedits, isLoading, hasError,loadingReddit } from './RedditsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



const Reddits = () => {
    const dispatch = useDispatch();
    const reddits = useSelector(selectRedits);
    const loading = useSelector(isLoading);
    console.log(reddits)

    useEffect(()=>{
        dispatch(loadingReddit())
    },[])
    console.log(loading)
    if(loading){
        return <p>loading.......</p>;
    }  

//    if(!reddits) return;
    const d = new Date()

    return (
        <div className='redditSection'>
            {
                  reddits.map(({data})=>(
                    <div key={data.id} className='postSection'>
                        <div className='post'>
                            <div className='postTime'>
                                <p>{d.toDateString()}</p>
                                <p className='join'><a>join</a></p>
                               
                            </div>
                            <div className='img'>
                                <h2 className='postTitle'>{data.title}</h2>
                                <div className='imgContainer'>
                                    <img src={data.thumbnail}/>
                                </div>
                            
                            </div>
                            <div className='imgIcons'>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
                                        <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
                                    </li>
                                    <li><FontAwesomeIcon icon="fa-regular fa-comment" /></li>
                                    <li><FontAwesomeIcon icon="fa-solid fa-square-share-nodes" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
               
            }
        </div>
    )
}

export default Reddits;


