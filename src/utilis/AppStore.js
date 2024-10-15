import {configureStore} from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './Gptslice';
import configReducer from './ConfigSlice';
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer
    }
});
export default appStore;
