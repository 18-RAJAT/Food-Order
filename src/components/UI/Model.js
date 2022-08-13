import classes from './Model.module.css';
import ReactDOM from 'react-dom';

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


const portalElement = document.getElementById('overlays');    

const Model = props =>{
    retun(
        <Fragment>
            {/* <Backdrop/>
            <ModelOverlay>{props.children}</ModelOverlay> */}
            {ReactDom.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        </Fragment>
    );
};
export default Model;