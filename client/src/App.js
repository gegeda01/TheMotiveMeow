import Reac, {useEffect} from 'react';
import { Container ,AppBar,Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Meow from './images/Meow.png';
import Meow2 from './images/Meow2.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return(
        <Container maxidth = "lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography claseeName= {classes.heading} variant = "h2" align="center"  >MotiveMeow</Typography>
                <div className="d-flex flex row ">
                <Grid container justify="space-between" spacing={10}>
                <img claseeName = {classes.image} src={Meow} alt="Meow" height="60" width="10%" />
                <img claseeName = {classes.image} src={Meow2} alt="Meow2" height="60" width="10%" />
                </Grid>
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={7}>
                            <Posts />

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;