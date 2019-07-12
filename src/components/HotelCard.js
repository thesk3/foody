import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});


export default function ImgMediaCard(location,dishes) {
    //console.log("dishes-->",dishes);
    console.log("dishes-->",location);
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{    maxWidth: '100%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={location.location.HotelDishPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {location.location.name} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {location.location.foodCategaroy}<br/>
          {location.location.time} {location.location.star}
          {/* {location.dishes?(<h1>One Post</h1>):(<h1>All Post</h1>)} */}
                 {/* <div>{location.location.dishes.map((dish,i) => <div id="main" key={i}><div>{dish.name}</div>
                 
                 <div><img src={dish.dishPhoto} width="auto" alt="description of "/></div> 
                 
                 </div>)}</div> */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}