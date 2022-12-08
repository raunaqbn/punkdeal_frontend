import React from 'react'
import { styled } from '@mui/material/styles';

import { Header2 , Footer} from '../../containers';
import { Profile, DealCard } from '..';
import { Grid, Paper, Box, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import {useState, useEffect} from 'react'

const tempDealsList = [
        {
            "id": 1,
            "description": "10% off at Nirvana Coffee",
            "user_id": 1
        },
        {
            "id": 2,
            "description": "10% off at La Victoria",
            "user_id": 1
        },
        {
            "id": 5,
            "description": "10% off at Gucci",
            "user_id": 1
        }
    ];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing("10px"),
    borderRadius: '4px',
    textAlign: 'center',
  }));

const Deals=() => {

    const [gridItems, setGridItems] = React.useState([]);
    const testUser = {
        user_id: 1,
        name: "raunaq",
        email: "raunaq.naidu@gmail.com"
    }
    React.useEffect(() => {
            async function fetchGridItems() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "user_id": testUser.user_id })
            };
            const response = await fetch('http://localhost:8080/get-deals', requestOptions);
            const gridItems = await response.json();
            console.log(gridItems)
            setGridItems(gridItems);
        }

        fetchGridItems();
      }, []);


    return(
        <div>
        <div>
        <Header2/>
        <Profile user={testUser}/>
        </div>
        <Box sx={{ flexGrow: 1 }} mt ={"50px"} ml={"50px"} mr={"50px"} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {gridItems.map(item => (
                <Grid xs={2} sm={4} key={item.id} >
                    <DealCard description = {item.description}/>
                </Grid>
                ))}

        </Grid>
        </Box>
        </div>
    )
}

export default Deals;
