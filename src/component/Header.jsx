import React,{ useContext } from "react";
import { Box, Grid, Button } from "@material-ui/core/";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { signInWithPopup} from '../Fire';

const Header = () => {
  return (
    <>
      <Box  boxShadow={1} component="div" className="header-section">
        <Container>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="h5"><Link to="/">Home</Link></Typography>
            </Grid>
            <Grid className="header-right" item xs={9}>
             
              <Link to="/create">
                <Button className="btn"  variant="contained" color="secondary">
                  Create New Post
                  </Button></Link>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
