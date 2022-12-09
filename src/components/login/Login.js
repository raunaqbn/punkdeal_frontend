import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Header2 , Footer} from '../../containers';
import { useNavigate } from "react-router-dom";
import { Email, Password } from '@mui/icons-material';
import {useState, useEffect} from 'react'


const Login=()=>{

    const paperStyle={padding :20,height:'50vh',width:'30vw', margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const formstyle={padding :20}
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        console.log ("handle submit")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email, "password": password })
        };
        const response =  fetch('http://localhost:8080/login', requestOptions);
        const result =  response.json();
        if (result.email === email) {
            navigate('/deals')
        }
    }
    return(
        <Grid>
            <Header2/>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Grid>
                <TextField style={formstyle} label='Email' placeholder='Enter email' fullWidth required/>
                <TextField style={formstyle}label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                </Grid>

                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
            <Footer/>
        </Grid>
    )
}

export default Login;
