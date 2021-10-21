import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    Container, 
    AppBar, 
    Typography, 
    Grow, 
    Grid, 
    Toolbar 
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts())
  }, [])

  return (
    <Router>
      <div className="App">
        <AppBar className={classes.appBar} position="relative" mt={3}>
          <Toolbar>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item sm={6}>
                  <Link className={classes.linkItem} to='/'>
                    <Typography variant="h6" color="inherit" noWrap>
                        MERN Blog
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sm={6}>
                  <Link className={`${classes.linkItem} ${classes.createPost}`} to="/create-post"> Create Post </Link>
                </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" >
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/create-post">
              <Form />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
