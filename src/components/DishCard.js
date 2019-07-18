import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(post) {
    console.log("post-->",post.dish);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card style={{    marginBottom: '20px'}} className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
         
              
              <div>{post.dish.dishID}</div>
              <div>{post.dish.dishPrice}</div>
              <div>{post.dish.name}</div>
             
             
             
        <button onClick={() => this.addTocart(post.dish) }>Add to cart</button>
        <hr/>
        
           
        </CardContent>
       
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        title="Live from space album cover"
      />
    </Card>
  );
}