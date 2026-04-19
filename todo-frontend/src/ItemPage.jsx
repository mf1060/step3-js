import React, { useState, useEffect } from 'react';
import Item from './Card';
import QuantityToggle from './QuantityToggle';

//This is the component for each individual item page.
function ItemPage(props){
    //Creates a state variable for the data related to the item
    const [item, setItem] = useState([])
    //Sets the URL to the server
    const API_URL = 'http://localhost:5000/items';
    const idNum = props.id

    //Fetches the item from the server by Id. 
    useEffect(() => {
        fetch(`${API_URL}/${idNum}`)
        .then(res => res.json())
        .then(data => setItem(data))
    })

    console.log(item)
    
    return (
        <>
        {/*Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
        <div class = "container">
           <div class="row">
            <div class="col">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>$ {parseFloat(item.price).toFixed(2)}</p>
            {/*Adds the incrementer/decrementer passing in item id 
            //and the quantity for each item */}
            <QuantityToggle id={item.id} quantity={item.quantity} />
             </div>
                <div class="col">
                    <img class="card-img-top" src={item.img} alt={item.altImg} />
                </div>
            </div>   
        </div>
        </>
    )


}

export default ItemPage;