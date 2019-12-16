 import React from 'react';
 import classes from './Burger.module.css';
 import BurgerIngrd from './BurgerIngrd/BurgerIngrd'
import BurgerIngredient from './BurgerIngrd/BurgerIngrd';

 const burger = (props) => {
    let transformIgredients = Object.keys(props.ingredients)
            .map(igKay=>{
                return [...Array(props.ingredients[igKay])]
                .map((_,i)=>{
                    return <BurgerIngredient key={igKay + i} type={igKay}/>
                });
            })
            .reduce((arr,el)=>{
                return arr.concat(el)
            },[]);
            if(transformIgredients.length<1){
                transformIgredients=<p>Plese Add Ingredients</p>;
            }
     return(
        <div className={classes.Burger}>
        <BurgerIngrd  type="bread-top"/>
        {transformIgredients}
        <BurgerIngrd  type="bread-bottom"/>
        </div>
    );
 };

 export default burger;