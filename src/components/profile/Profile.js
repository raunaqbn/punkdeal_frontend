import React from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import "./profile.css"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Profile(props) {
  const { user } = props;

  return (
    <Grid >

    <div >
      <div className="punkdeal__header-content">
        <h1 className="gradient__text">
        Welcome to your Deals {user.name} !
        </h1>
        </div>
    </div>
    </Grid>
  );
}

export default Profile;
