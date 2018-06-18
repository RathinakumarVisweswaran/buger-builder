import React, {Component} from 'react';
import Aux from '../../hoc/AuxilaryComp';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {

    INGREDIENTS_PRICE = {
        meat: 4,
        cheese: 2,
        bacon: 6,
        salad: 3
    }

    state = { ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 1,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(ingKey => ingredients[ingKey])
                    .reduce((sum, elm) => sum + elm, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        const incrementedCount = currentCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = incrementedCount;
        const currentPrice = this.state.totalPrice;
        const incrementedPrice = currentPrice + this.INGREDIENTS_PRICE[type];
        this.setState({totalPrice: incrementedPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        if (currentCount <= 0) return;
        const decrementedCount = currentCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = decrementedCount;
        const currentPrice = this.state.totalPrice;
        const incrementedPrice = currentPrice - this.INGREDIENTS_PRICE[type];
        this.setState({totalPrice: incrementedPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = () => this.setState({purchasing: true})

    purchaseCancelHandler = () => this.setState({purchasing: false})

    purchaseContinueHandler = () => {
        this.setState({purchasing: false});
        alert("the burger purchase continued !!!");
    }

    render() {

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {disabledInfo[key] = disabledInfo[key] <= 0}

        return (
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler} 
                    purchaseContinued={this.purchaseContinueHandler}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
        </Aux>)
    }
}

export default BurgerBuilder;