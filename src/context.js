import React,{useReducer, createContext} from 'react';

export const ItemContext = createContext();

const convertPrice1 = (priceString1,priceString2) => {
    const price1 = parseFloat(priceString1.replace('$', ''));
    const price2 = parseFloat(priceString2.replace('$', ''));
    const total = price1 - price2;
    const totalString = "$" + total.toFixed(2);

    return totalString; 
}
const convertPrice = (priceString1,priceString2) =>{
    // Remove the "$" sign and convert to a floating-point number
    const price1 = parseFloat(priceString1.replace('$', ''));
    const price2 = parseFloat(priceString2.replace('$', ''));
    const total = price1 + price2;
    // Convert the total back to a string with "$" sign
    const totalString = "$" + total.toFixed(2); 

    return totalString; 
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
                
                'price': convertPrice(updatedItems[existingItemIndex].price,action.payload.price),
                'counter': updatedItems[existingItemIndex].counter+1// Update total price
                };
                return updatedItems;
            } else {
                // Item doesn't exist in cart, add it as a new item
                return [...items, action.payload];
            }

        case 'DELETE_ITEM':
            const ItemIndex = items.findIndex(item => item.id === action.payload.id);
            
            // Item already exists in cart, update its properties
            const updatedItems = [...items];
            updatedItems[ItemIndex] = {
            ...updatedItems[ItemIndex],
            'price': convertPrice1(updatedItems[ItemIndex].price,action.payload.itemPrice),
            'counter':updatedItems[ItemIndex].counter - 1   // Update
            }
            return updatedItems;

        case 'DELETE':
            const fileteredItems = items.filter(item => item.id !== action.payload.id);
            return fileteredItems;

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




