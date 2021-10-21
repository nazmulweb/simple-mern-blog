import { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core"
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";

import { createPost } from '../../actions/posts'
import usestyles from './styles'

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const classes = usestyles();
    const dispatch = useDispatch();

    const handleSubmit = () =>{
        dispatch(dispatch(createPost(postData)))
    }
 
    const clear = () =>{

    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item item xs={6} md={8}>
                    <Paper className={classes.cardStyle}>
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <Typography variant="h6">Create post</Typography>
                            <TextField 
                                name="creator"
                                variant="outlined"
                                label="Creator"
                                fullWidth
                                value={postData.creator}
                                onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                            />
                            <TextField 
                                name="title"
                                variant="outlined"
                                label="title"
                                fullWidth
                                value={postData.title}
                                onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                            />
                            <TextField 
                                name="message"
                                variant="outlined"
                                label="message"
                                fullWidth
                                value={postData.message}
                                onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                            />
                            <TextField 
                                name="tags"
                                variant="outlined"
                                label="tags"
                                fullWidth
                                value={postData.tags}
                                onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                            />
                            <div>
                                <FileBase 
                                    type="file"
                                    multiple={false}
                                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                                />
                            </div>
                            <Button type="submit" size="large" color="primary" variant="contained">Submit</Button>
                            <Button onClick={clear} size="large" color="secondary" variant="contained">Clear</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Form
