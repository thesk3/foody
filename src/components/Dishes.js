import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(dishes) {
 // console.log("in dishesh-->",dishes);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={dishes.location.HotelDishPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
          {dishes.location.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {dishes.location.foodCategaroy}<br/>
          {dishes.location.time} {dishes.location.star}
         
          </Typography>
        </CardContent> 
      </CardActionArea>

    </Card>
  );
}