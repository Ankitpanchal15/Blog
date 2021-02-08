import React, { useState,useEffect } from 'react';
import {
    Paper,
    Typography,
    Container,
    makeStyles,
    CardMedia,
    Grid, 
    CircularProgress,
    Button,
    Box
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import UseFetch from '../Hooks/UseFetch';
import {db} from '../Fire';





const useStyle = makeStyles({
    banner: {
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    blogPost: {
        padding: 30,
        marginTop: 20
    },
    heading: {
        textAlign: "center"
    }
})

const BlogPost = () => {

    const classes = useStyle();
    const { id } = useParams();
    // const { doc: blogPost, loading, error } = UseFetch("post",id);
    const [blogPost,seBlogPost] = useState();
    const [loading,setLoading] = useState();
    const [error,seterror] = useState();
    const history = useHistory();

    useEffect(()=> {
        db.collection("post").doc(id).get()
        .then(snapshot => seBlogPost(snapshot.data()) ) 

    },[id])

    const handleDelete = () => {
        if (window.confirm("Delete the item?")) {
        db.collection("post").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            history.push('/');
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    }

    return (
        <>
            <div className="blog-post-wrap" >
                <CardMedia
                    className={`banner-section ${classes.banner}`}
                    image={blogPost && blogPost.image}
                >
                   {blogPost && <Typography className={classes.heading} component='h2' variant="h4"  >{blogPost.title}</Typography> }
                </CardMedia>
                <Container>
                    <Paper className={classes.blogPost} elevation={3}  >

                    {loading && <Grid item xs={12}>
                            <div className="loading">
                                <CircularProgress />
                            </div>
                        </Grid>}
                        {error && <Typography component='h2' variant="h4" style={{ textAlign: 'center' }}  >Blog Post Not Found</Typography>}

                        {blogPost && <>
                            <Typography component='h2' variant="h4"  >{blogPost.title}</Typography>
                            <Typography component='p' variant='body2'   >
                                {blogPost.body}
                            </Typography>

                            <Box marginTop={2}>
                            <Button onClick={handleDelete} variant="contained" color="secondary">
                                 Delete Blog
                            </Button>
                            </Box>
                            
                        </>
                        }
                         

                    </Paper>
                </Container>
            </div>

        </>
    )
}

export default BlogPost;