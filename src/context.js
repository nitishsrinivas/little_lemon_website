import React,{useReducer, createContext} from 'react';

export const ItemContext = createContext();

const convertPrice = (priceString1,priceString2) =>{
    // Remove the "$" sign and convert to a floating-point number
    const price1 = parseFloat(priceString1.replace('$', ''));
    const price2 = parseFloat(priceString2.replace('$', ''));

    // Add the two prices together
    const total = price1 + price2;

    // Convert the total back to a string with "$" sign
    const totalString = "$" + total.toFixed(2); // Convert to string with 2 decimal places

    return totalString; // Output: "$n"
}

const itemReducer = (items,action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            const existingItemIndex = items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                // Item already exists in cart, update its properties
                const updatedItems = [...items];
                updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                'price': convertPrice(updatedItems[existingItemIndex].price,action.payload.price) // Update total price
                };
                return updatedItems;
            } else {
                // Item doesn't exist in cart, add it as a new item
                return [...items, action.payload];
            }
        default:
            return items;
    }     
}

export const ContextProvider = ({children}) => {
    const [items,dispatch] = useReducer(itemReducer,[]);

    return(
        <ItemContext.Provider value={{items,dispatch}}>
            {children}
        </ItemContext.Provider>
    )
}




