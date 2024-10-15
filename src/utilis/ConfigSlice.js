import { createSlice } from "@reduxjs/toolkit"
const  ConfigSlice=createSlice({
    name:'config',
    initialState:{
        defaultLanguage:"en",
       
    },
    reducers:{
        ChangeLanguage:(state,action)=>{
            console.log(action.payload)
      state.defaultLanguage=  action.payload;
       
    }
}
});
export default ConfigSlice.reducer;
export const {ChangeLanguage} = ConfigSlice.actions