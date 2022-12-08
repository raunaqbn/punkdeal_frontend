import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dealLogo from '../../assets/discount_logo.jpg';

export default function DealCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={dealLogo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Claim</Button>
        <Button size="small">Reject</Button>
      </CardActions>
    </Card>
  );
}
