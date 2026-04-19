//The following code uses a NavBar bootstrap Component from: 
// https://getbootstrap.com/docs/4.0/components/navbar

//The following is a link to small button at the top
//https://getbootstrap.com/docs/5.0/utilities/position/

import React, { useState, useEffect } from 'react';

function NavBar(){

    const [cartItems, setCartItems] = useState([])
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

    //Getting the number of items in the cart.
    let numItems = 0
     cartItems.map((t) => {
      numItems = numItems + t.quantity
    })

    return(

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/*Adds a logo with the link to the home page */}
        <a class="navbar-brand" href="/">Michael's Shop</a>
        {/*Adds a hamburger button 
           Reference: https://getbootstrap.com/docs/4.0/components/navbar/ */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/*Adding links to the home, search, and cart pages */}
            <a class="nav-item nav-link active" href="/">Home</a>
            <a class="nav-item nav-link" href="/Search">Search</a>
            <a class="nav-item nav-link" href="/Cart">Cart
            {/* The following code uses a Bootstrap badge component to display the 
                number of items in the shopping cart.
              Reference: https://getbootstrap.com/docs/4.0/components/badge/ */}
            {<span class="badge badge-info text-warning">{numItems}</span>}
            </a>
          </div>
        </div>
      </nav>

    )


}

export default NavBar;