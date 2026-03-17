// main.js

// 1. Import your modules
import ProductData from './ProductData.js';
import ProductList from './ProductList.mjs'; // default export

// 2. Create an instance of ProductData
const productData = new ProductData();

// 3. Render all products
const container = document.querySelector('.product-list'); // make sure <ul class="product-list"> exists
const productList = new ProductList('all', productData, container); // pass category, dataSource, listElement
productList.render();

// 4. Render tents category
const tentsList = document.querySelector('.tents-list'); // make sure <ul class="tents-list"> exists
const tents = new ProductList('tents', productData, tentsList);
tents.render();

// 5. Render sleeping bags category
const bagsList = document.querySelector('.bags-list'); // make sure <ul class="bags-list"> exists
const sleepingBags = new ProductList('sleepingBags', productData, bagsList);
sleepingBags.render();