import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box , TextField , Button , Switch } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <>
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" type='password' sx={{ mt: 1 }} />
      <Button variant="contained" sx={{ mt: 1 }} >Login</Button>
      <div>
      <Switch {...label} defaultChecked />
    </div>
      
      
    </Box>
    </>
  )
}

export default App
