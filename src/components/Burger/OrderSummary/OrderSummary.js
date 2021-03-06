import React from 'react';
import Aux from '../../../hoc/AuxilaryComp';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
                                    .map(ingKey => 
                                        <li key={ingKey}>
                                            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                                        </li>)

    return <Aux>
            <h3> Your Order </h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong> Total price: $ {props.price} </strong>
            <p>Continue to checkout ??</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
};

export default orderSummary;