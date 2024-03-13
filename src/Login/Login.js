import React from 'react'
import './login.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function Login() {
  return (
    <div className='paper-div'>
       <Card sx={{ Width: 275 }}>
        <CardHeader title="Sign In">Sign In</CardHeader>
      <CardContent>
      <TextField label="Email" variant="outlined" /><br></br>
      <TextField label="Password" variant="outlined" />


      </CardContent>
      <CardActions className='btn'>
      <Button id='btn'  variant="contained" >Login</Button>
      </CardActions>
    </Card>
    </div>
  )
}
