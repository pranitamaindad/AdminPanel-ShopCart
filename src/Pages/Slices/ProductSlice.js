import React from 'react'
import { createSlice } from '@reduxjs/toolkit'



const productSlice=createSlice({
  name:'product',
  initialState:{data:[{id:1,title:'bottle', image: "https://m.media-amazon.com/images/I/613QPtFEsHL._AC_UL320_.jpg", createdAt:'',status:'Instock',Rating:'',Price:'',featured: true,}]},
  reducers:{
    addproduct:(state,action)=>{
      const newtext={
        id:1,
        Product:action.payload,
      }
      state.data.push(newtext)

  }}
})


export const {addproduct}=productSlice.actions
export default productSlice.reducer;
