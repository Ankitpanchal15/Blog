import React from 'react';
import {Grid,Card,makeStyles,Typography,CardMedia,Box,Button} from '@material-ui/core/';
import{Link} from 'react-router-dom';


const useStyle = makeStyles({
    root:{
        padding: "50px 0",
    },
    card:{
        padding:0
    },
    media: {
        paddingBottom:"80%"
    },
    blogHeading: {
        margin:" 0 0 10px"
    }
   
})
const CardBlog = ({image,title,body,url})=> {
    const classes = useStyle();
    return(
        <>
         <Grid item md={4}  sm={6} >
             <Card className={classes.card} >
                    <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                    />
                    <Box  className={classes.cardContent}  p={2} component='div' >
                     <Typography className={classes.blogHeading} component="h2" variant="h5">
                        {title}
                    </Typography>
                    <Typography component="p" variant="body2">
                        {body.substr(0, 100) }...
                    </Typography>
                    <Link to ={`/blog/${url}`} >
                    <Button style={{marginTop:'20px'}} variant='contained' color="primary">Read More</Button>
                    </Link>
                    </Box>
                </Card>
                </Grid>
        </>
    )
}

export default CardBlog;