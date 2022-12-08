import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Header2 , Footer} from '../../containers';




const SignUp =()=> {

    const paperStyle={padding :20,height:'50vh',width:'30vw', margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const formstyle={padding :20}
    return(
        <Grid>
            <Header2/>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <Grid>
                <TextField style={formstyle} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField style={formstyle}label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
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

export default SignUp;
