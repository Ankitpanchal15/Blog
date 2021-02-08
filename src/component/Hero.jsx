import React from 'react';
import { 
    makeStyles,
    Paper,
    Typography,
    Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding:"80px 0",
    textAlign:'center',
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <Container >
            <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
               Blog
            </Typography>
            </div>
    
        </Container>
        </Paper>
        </>
    )
}

export default Hero;