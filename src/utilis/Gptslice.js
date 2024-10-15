import { createSlice } from "@reduxjs/toolkit"
const  Gptslice=createSlice({
    name:'gpt',
    initialState:{
        showgptSearch:false,
       
    },
    reducers:{
        toggleGptSearch:(state)=>{
         //   console.log(state.showgptSearch)
            state.showgptSearch=!state.showgptSearch
       
    }
}
});
export default Gptslice.reducer;
export const {toggleGptSearch} = Gptslice.actions