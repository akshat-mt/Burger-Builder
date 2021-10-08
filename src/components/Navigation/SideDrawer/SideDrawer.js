import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from "../../../hoc/Auxillary/Auxillary"

const sideDrawer = ( props ) => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = "SideDrawer Open";
    }
    // return (
    //     <Auxillary>
    //         <Backdrop show={props.open} clicked={props.closed}/>
    //         <div className= {attachedClasses}>
    //                 <Logo height="12%"/>
    //             </div>
    //             <nav>
    //                 <NavigationItems />
    //             </nav>
    //         </div>
    //     </Auxillary>
    // );
    return (
        <Auxillary>
            <Backdrop show={props.open} clicked = {props.closed}/>
            <div className = {attachedClasses}>
                <Logo height="12%"/>    
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxillary>
        ) 
};

export default sideDrawer;