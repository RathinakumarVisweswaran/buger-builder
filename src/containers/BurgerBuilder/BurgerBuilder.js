import React, {Component} from 'react';
import Aux from '../../hoc/AuxilaryComp';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = { ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 1,
            salad: 1
        }
    }



    render() {
        return (<Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls/>
        </Aux>)
    }
}

export default BurgerBuilder;