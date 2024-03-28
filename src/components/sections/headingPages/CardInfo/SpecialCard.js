import {Link} from 'react-router-dom';
import "./specials.css";
import { useContext,useState } from 'react';

import { ItemContext } from '../../../../context';


export default function SpecialCard(props) {
    const {items,dispatch} = useContext(ItemContext);

    const count = id => {
        if(items.length > 0){
          const item = items.findIndex(item => item.id === id);
          if(item !== -1){
            return items[item].counter;
          }
          else{
            return 0;
          }
        }
        else {
            return 0;
        }

    }
    
    
    const onIncrement = () =>{
        dispatch({type:'ADD_ITEM', payload:{'img':props.image,'name':props.name,'itemPrice':props.price,'price':props.price,'id':props.id,'counter':1}});
    }
    
    const onDecrement = () => {
        if(props.count > 0) {
            dispatch({type:'DELETE_ITEM',payload:{'id':props.id,'itemPrice':props.price}})
        }
        if(count(props.id) === 1){
            dispatch({type:'DELETE',payload:{'id':props.id}})
        }
    }

    const [btn,setBtn] = useState(false);
    
    const addItems = () => {
        setBtn(true);  
    }

    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <div className="header">
                    <h1>{props.name}</h1>
                    <div className="counter1">
                        <button onClick={onDecrement}  className="decrement">-</button>
                        <span className="count">{props.count}</span>
                        <button onClick={onIncrement} className="increment">+</button>
                    </div>

                </div>
                <h3>{props.price}</h3>
                <p className="description">{props.description}</p>
                {btn ? <Link className="speciall-button" to="/order">Check Cart</Link>: <button onClick={addItems} className='actionn-button'>Order</button>}
                
            </section>
        </article>
    );
}