import { createSlice } from "@reduxjs/toolkit"

const  movieSlice=createSlice({
    name:'movies',
    initialState:{
        NowPlayingMovies:null,
        TrailerVideo:null,
        PopularMovies:null
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailervideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    }
});

export default movieSlice.reducer;
export const {addNowplayingMovies,addTrailervideo,addPopularMovies} = movieSlice.actions;