import React from 'react';
import useStyles from './style';

const Post =()=> {
    const classes = useStyles();
    return(
        <h1 className={classes.Post}>POST</h1>
    );
}

export default Post;