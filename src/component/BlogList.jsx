import React, { useState, useEffect } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@material-ui/core/';
import CardBlog from './CardBlog';
import UseFetch from '../Hooks/UseFetch';

const BlogList = () => {
    const { loading, Error, doc: blog } = UseFetch("post");

    return (
        <>
            <Container>
                <div className="blog-list-wrap" >
                    <Grid container spacing={3} >

                        {loading && <Grid item xs={12}>
                            <div className="loading">
                                <CircularProgress />
                            </div>
                        </Grid>}

                        {Error && <Grid item xs={12}>
                            <div className="error">
                                <Typography variant='body2' component='p'> {Error} </Typography>
                            </div>
                        </Grid>}

                        {blog &&
                            blog.map(data => {
                                return <CardBlog
                                    image={data.image}
                                    title={data.title}
                                    body={data.body}
                                    url={data.id}
                                    key={data.id}
                                />
                            })
                        }

                    </Grid>

                </div>
            </Container>

        </>
    )
}

export default BlogList;