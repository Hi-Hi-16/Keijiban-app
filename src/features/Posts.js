import {createSlice} from "@reduxjs/toolkit"
import {PostData} from "../DummyData"

export const postSlice = createSlice({
    name:"posts",
    initialState:{value:PostData},
    reducers:{
        addPost:(state,action)=>{
            state.value.push(action.payload);
        },
    },
});

export default postSlice.reducer;