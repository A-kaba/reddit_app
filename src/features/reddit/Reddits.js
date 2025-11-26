import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { selectRedits, isLoading, hasError } from './RedditsSlice';
import { loadingReddit } from './RedditsSlice';


const Reddits = () => {
    const reddits = useSelector(selectRedits);
    const dispatch = useDispatch();
    // dispatch(loadingReddit())

    useEffect(()=>{
        dispatch(loadingReddit())
    },[])

    console.log(reddits)
    console.log(useSelector(isLoading))
    console.log(useSelector(hasError))
    return (
        <div>
            <h2>Reddit</h2>


        </div>
    )
}

export default Reddits;


