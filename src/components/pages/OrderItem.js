import React from 'react'
import "./order.css";
import {useContext} from 'react';
import { ItemContext } from '../../context';


export default function OrderItem(props) {
    const {dispatch} = useContext(ItemContext);

    const onIncrement = () =>{
        dispatch({type:'ADD_ITEM',payload:{'id':props.id,'price':props.itemPrice}});
    }
    
    const onDecrement = () => {
        if(props.count > 0) {
            dispatch({type:'DELETE_ITEM',payload:{'id':props.id,'itemPrice':props.itemPrice}})
        }
        console.log(props.count);
        if(props.count === 1){
            dispatch({type:'DELETE',payload:{'id':props.id}})
        }
    }
    
    const onDelete = () => {
        dispatch({type:'DELETE',payload:{'id':props.id}});
    }
   
  return (
    <>
    <div className="container">
        <div className="item">
            <img src={props.image} alt="Item"/>
            <div className="item-info">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
            <div className="counter">
                <button onClick={onDecrement}>-</button>
                <span id="quantity">{props.count}</span>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDelete}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    
   </div>

   </>
  )
}
