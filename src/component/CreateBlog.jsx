import React,{useEffect, useState} from 'react';
import { 
    Container, 
    Typography,
    Box,
    Card,
    TextField,
    Button,
    makeStyles,
    MenuItem,
    Select,
    InputLabel,
    CircularProgress,
    LinearProgress
} from "@material-ui/core";
import { useParams, useHistory } from 'react-router-dom';
import UsePost from '../Hooks/UsePost';

const useStyle = makeStyles({
    inputfile:{
        display:"none",
    },
    fileLabel:{
        marginBottom:15,
        display:"block"
    },
    previewImg: {
        height:200,
        objectFit:"cover",
        objectPosition:"center",
        marginBottom:30
    },
    submitBtn:{
        marginTop:30
    }
});


const CreateBlog = ()=> {

    const[title,setTitle] = useState(null);
    const[body,setBody] = useState(null);
    const[author,setAuthor] = useState(null);
    const[image,setImage] = useState(null);
    const[createBlog,setCreateBlog] = useState(false);
    const history = useHistory();

    const ClearALL = ()=> {
        setTitle('');
        setBody('');
        setAuthor('');
        setImage('');
    };
    const {progress,url,error,sucess,setSucess,setUrl} = UsePost(createBlog,image,title,body,author);

    const classes = useStyle();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!(title == null) && !(image == null) && !(body == null) ) {
            setCreateBlog(true);
        } else {
            alert("Please Add Content")
        }
    }

    useEffect(()=>{
       if(url){
        setCreateBlog(false);
        ClearALL();
        setUrl(null);
        history.push('/');
       }  
    },[sucess])

    return (
        <>
        <Box paddingTop={7} >
        <Container>
            <Card className="form-container" >  
            <Typography variant='h5' component='h2' >Add New Blog</Typography>
                <form onSubmit={handleSubmit}>
                    <input
            accept="image/*"
            className={classes.inputfile}
            id="contained-button-file"
            multiple
            type="file"
            onChange= {e => setImage(e.target.files[0])}
            />
            <label className={classes.fileLabel} htmlFor="contained-button-file">
            <Button variant="contained" color="default" component="span">
                Upload Image
            </Button>
            </label>
               { image && <img className={classes.previewImg} src={URL.createObjectURL(image)} alt={image.name} /> }
              
                <TextField fullWidth 
                label="Title" 
                type="text"
                 variant="outlined"
                 value={title}
                 onChange={ e => setTitle(e.target.value)}
                 />

                <TextField fullWidth multiline 
                label="Body"
                variant="outlined" 
                rows={4}
                value={body}
                onChange={ e => setBody(e.target.value)}
                />

            <InputLabel id="demo-simple-select-label">Author</InputLabel>
            <Select
            fullWidth 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={ e => setAuthor(e.target.value)}
            >
            <MenuItem value="Ankit">Ankit</MenuItem>
            <MenuItem value="Joy">Joy</MenuItem>
            <MenuItem value="Lisa">Lisa</MenuItem>
            <MenuItem value="Maria">Maria</MenuItem>
            </Select>

            { !progress && <Button className={classes.submitBtn}  type="submit" variant="contained" color="primary">
                Add Post {progress}
                </Button> }
                { progress && <LinearProgress style={{marginTop:15}} /> }
                { sucess && <Typography>{sucess}</Typography> }
               
                </form>
            </Card>
        </Container>
        </Box>
        </>
    )
}

export default CreateBlog;