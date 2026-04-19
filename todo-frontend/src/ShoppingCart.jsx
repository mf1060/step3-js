import React, { useState, useEffect } from 'react';
import QuantityToggle from './QuantityToggle';

function Cart(){  
    //Sets a state for the item data that is currently in the shopping cart.
    const [cartItems, setCartItems] = useState([]);
    const API_URL = 'http://localhost:5000/items';

    //Getting Cart Item Details
    useEffect(() => {
      fetch(API_URL)
        .then(res => res.json())
        //Retrieves only items where inCart = true
        .then(data => data.filter(i => i.inCart == true))
        //Stores all data to cart items.
        .then(items => setCartItems(items))
    })

    let cartTotal = 0
     cartItems.map((t) => {
      cartTotal = cartTotal + (t.price * t.quantity)
    })

    return (

      //Using Bootstrap Tables to create spacing for the Cart Items
      //Reference: https://getbootstrap.com/docs/4.0/content/tables/
      <div id="cart">
        <h1>Cart</h1>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((t) => (
            <tr key={t.id}>
              {/*Adds a link to each item page for the title */}
              <td><a href={`/${t.id}`}>{t.title}</a></td>
              <td><QuantityToggle id = {t.id} quantity={t.quantity}/> </td>
            </tr>  
    
        ))
        
        }
        </tbody>
      </table>
    
    {/*Adds a total at the bottom of the page */}
    <p>Total: ${cartTotal.toFixed(2)}</p>
    </div>
    )
}

export default Cart;