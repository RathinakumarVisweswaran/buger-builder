import React, {Component} from 'react';
import Aux from '../../hoc/AuxilaryComp';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {showSideDrawer: false}
    sideDrawerToggleHandler = () => this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}});

    render () {
        return (<Aux>
                    <Toolbar toggleSidedrawer={this.sideDrawerToggleHandler} />
                    <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>);
    }
}

export default Layout;