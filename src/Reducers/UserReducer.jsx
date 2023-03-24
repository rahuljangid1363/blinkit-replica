import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const UserReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const data=state.find((item)=>item.id===action.payload.id)
      if(data)
      {
        data.quantity++;
      }
      else{
        state.push(action.payload)
      }
    },
    remove(state, action) {
      const value = state.filter((item) => item.id !== action.payload);
      return value;
    },
    increment(state,action){
      state.map((item)=>{
        if(item.id===action.payload){
          item.quantity++;
          console.log("lala quantity increse---> ",item.quantity)

        }
        return item.quantity
      })
    },
    decrement(state,action){
      state.map((item)=>{
        if(item.id===action.payload && item.quantity>0){
          item.quantity--;
          // console.log("lala quantity---> ",item.quantity)
        }
        return item;
      }).filter((item)=>item.quantity!=0)
      
    }

  }
});
export const { add, remove,increment,decrement} = UserReducer.actions;
export default UserReducer.reducer;
