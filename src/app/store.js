import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../features/reddit/RedditsSlice'

export default configureStore({
    reducer:{
        reddits: redditReducer,
    }
})
