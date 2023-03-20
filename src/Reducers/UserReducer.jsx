import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers:{
    add(state,action){
state.push(action.payload)
    },
    Remove(state,action){
        return state.filter((item) => item.id !== action.payload);
    }
   }
});
export const {add,Remove}=UserReducer.actions
export default UserReducer.reducer;