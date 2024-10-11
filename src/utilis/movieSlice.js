import { createSlice } from "@reduxjs/toolkit"

const  movieSlice=createSlice({
    name:'movies',
    initialState:{
        NowPlayingMovies:null,
        TrailerVideo:null
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },

        addTrailervideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    }
});

export default movieSlice.reducer;
export const {addNowplayingMovies,addTrailervideo} = movieSlice.actions;