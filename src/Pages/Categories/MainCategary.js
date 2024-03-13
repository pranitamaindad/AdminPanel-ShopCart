import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcategary } from '../Slices/CategarySlice'
import './MainCategary.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardActions, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export default function MainCategary() {
 const selector=useSelector((state)=>state.categary)
 const dispatch=useDispatch()
 const navigate=useNavigate()
 
  const [name,setName]=useState('')
  const [des,setDes]=useState('')

  const handleCategarynamechange=(e)=>{
   
    setName(e.target.value)
  }

const handleDesonchange=(e)=>{
  setDes(e.target.value)
}
const handleonDesClick=()=>{
  dispatch(addcategary(name))
  dispatch(addcategary(des))
  navigate(-1)
}
  return (

    <Card sx={{ padding: 3 }}>
      <CardContent>
        <TextField
        fullWidth
        label='Categary name'
        variant='outlined'
        
        onChange={handleCategarynamechange}
        />
        <TextField
        fullWidth
        label='Categary Description'
        variant='outlined'
        onChange={handleDesonchange}
        />
      </CardContent>
      <CardActions>
        <Button onClick={handleonDesClick}>Add categary</Button>
      </CardActions>

    </Card>
    // <div className='Categarydiv'>
    //    <input placeholder='Categary Name' onChange={handleCategarynamechange}/>
    //   <input placeholder='description' onChange={handleDesonchange}/> 
    //   <button onClick={handleonDesClick} >Add Categary</button>
      
    // </div>
  )
}
