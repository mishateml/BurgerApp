import React, {Component} from 'react';
import classes from './BurgerIngrd.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render(){
    let ingregient = null;

    switch(this.props.type){
        case('bread-top'):
            ingregient = (<div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                        </div>
            );
            break;

        case('bread-bottom'):
            ingregient = <div className={classes.BreadBottom}></div>
            break;
        case('meat'):
            ingregient = <div className={classes.Meat}></div>
            break;
        case('cheese'):
            ingregient = <div className={classes.Cheese}></div>
            break;
        case('salad'):
            ingregient = <div className={classes.Salad}></div>
            break;
        case('bacon'):
            ingregient = <div className={classes.Bacon}></div>
            break;
            default:
                 ingregient = null;
    
        }
        return ingregient;

        
    };
  

}
BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;
