import {Link} from 'react-router-dom';
import "./specials.css";
import { useContext,useState } from 'react';

import { ItemContext } from '../../../../context';


export default function SpecialCard(props) {
    const [btn,setBtn] = useState(false);
    const {dispatch} = useContext(ItemContext);
    const addItems = () => {
        setBtn(true);
        dispatch({type:'ADD_ITEM', payload:{'img':props.image,'name':props.name,'price':props.price,'id':props.id}});
    }

    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <div className="header">
                    <h1>{props.name}</h1>
                    <div className="counter1">
                        <button className="decrement">-</button>
                        <span className="count">0</span>
                        <button className="increment">+</button>
                    </div>

                </div>
                <h3>{props.price}</h3>
                <p className="description">{props.description}</p>
                {btn ? <Link className="special-button" to="/order">Check Cart</Link>: <button onClick={addItems} className='actionn-button'>Order</button>}
                
            </section>
        </article>
    );
}