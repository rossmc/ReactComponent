import React from 'react';

import classes from './ReactLogo.css';
import ReactImg from '../../assets/react.svg';

const reactLogo = (props) => (
    <img src={ReactImg} className={classes.react_logo}/>
);

export default reactLogo;
