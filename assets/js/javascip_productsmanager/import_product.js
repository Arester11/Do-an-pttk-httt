import { productList } from "./data.js"
let list = productList;
let products = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
if(products.length==0)
localStorage.setItem('list', JSON.stringify(list));
