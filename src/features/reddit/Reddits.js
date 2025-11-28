import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { selectRedits, isLoading, hasError,loadingReddit } from './RedditsSlice';



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

   if(!reddits) return;

    return (
        <div className='redditSection'>
            {/* {
                  reddits.map(({data})=>(
                    <div key={data.id} className='postSection'>
                        <div className='post'>
                            <div className='postTime'>
                                <p>time</p>
                                <div className='join'><a>join</a></div>
                               
                            </div>
                            <div className='img'>
                                <h2 className='postTitle'>{data.title}</h2>
                                <div className='imgContainer'>
                                    <img src={data.thumbnail}/>
                                </div>
                            
                            </div>
                            <div className='imgIcons'>
                                <ul>
                                    <li>like</li>
                                    <li>comments</li>
                                    <li>share</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
               
            } */}
        </div>
    )
}

export default Reddits;


