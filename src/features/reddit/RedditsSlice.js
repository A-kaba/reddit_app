import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//fetch data using thunk
export const loadingReddit = createAsyncThunk('reddits/getReddits',async()=>{
    const response =  await fetch('https://jsonplaceholder.typicode.com/users');

    const json = await response.json();
    return json.data.children;
    
})




//create slice
const redditsSlice = createSlice({
    name:'reddits',
    initialState:{
        blogs: {},
        isLoading:false,
        hasError:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadingReddit.pending, (state,action)=>{
            state.isLoading = true;
            state.hasError = false;
        }).addCase(loadingReddit.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.blogs = action.payload
        }).addCase(loadingReddit.rejected, (state, action)=>{
            state.isLoading = false;
            state.hasError = true
        })
    },
});

export const selectRedits = (state)=> state.reddits.blogs;
export const isLoading = (state) => state.reddits.isLoading;
export const hasError = (state) => state.reddits.hasError
export default redditsSlice.reducer;