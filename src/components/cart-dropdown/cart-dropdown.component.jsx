import React from 'react';
import CusstomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const Cart = () => (
    <div className='cart-dropdown'>
       <div className='cart-items'></div>
        <CustomButton />
    </div>
)

export default Cart;