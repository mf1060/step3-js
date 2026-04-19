
const API_URL = 'http://localhost:5000/items';

let items = []

function setCartItems(val){

  items = val;

}

await fetch(API_URL)
.then(res => res.json())
.then(data => setCartItems(data))

console.log(items);