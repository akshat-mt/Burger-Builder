import React from 'react';
import '../../../components/UI/Button/Button.css'
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
import '../../UI/Button/Button.css'
const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button className="Danger" onClick={props.checkoutCancelled}>CANCEL</button>
            <button className="Success" onClick={props.checkoutContinued}>ACCEPT</button>
        </div>
    );
}

export default checkoutSummary;