import classes from './Model.module.css';
import { Fragment } from 'react';
const Backdrop = props =>{
    return(
        <div className={classes.backdrop}/>
    );
};

const ModelOverlay = props =>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    );
};


const Model = props =>{
    retun(
        <Fragment>
            <Backdrop/>
            <ModelOverlay>{props.children}</ModelOverlay>
        </Fragment>
    );
};
export default Model;