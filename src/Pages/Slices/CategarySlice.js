import React from 'react'
import { createSlice } from '@reduxjs/toolkit'



const categarySlice=createSlice({
  name:'categary',
  initialState:{data:[{id:1,Categary:'bottle', Description:'2-2-2020',createdAt:'Instock',Actions:''}]},
  reducers:{
    addcategary:(state,action)=>{
      const newtext={
        id:1,
        Product:action.payload,
      }
      state.data.push(newtext)

  }}
})


export const {addcategary}=categarySlice.actions
export default categarySlice.reducer;
