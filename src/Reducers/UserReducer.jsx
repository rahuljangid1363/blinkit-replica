import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const UserReducer = createSlice({
  name: "cart",
  initialState,
  reducers:{
    add(state,action){
state.push(action.payload)
console.log('add', action.payload);
    },
    remove(state,action){
        const value = state.filter((item) => item.id !== action.payload);
        return value;
    }
   }
});
export const {add,remove}=UserReducer.actions
export default UserReducer.reducer;