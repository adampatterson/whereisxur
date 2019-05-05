import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import * as serviceWorker from './serviceWorker';

//  API Key
// const API_KEY = "e11fc97c6507401087d9544f2117c0ed";

// Puts the 'root' element in my template and assigns the top level component 'app'
ReactDOM.render(<App />, document.getElementById("root"));

/* (async function() {
    const response = await fetch(
        "https://www.bungie.net/Platform/Destiny2/Vendors/?components=400,402,401",
        { headers: { "X-API-Key" : API_KEY } } // config needed to pass through API key
    );
    
    // blah blah converts shit
    const data = await response.json();

    // then log it to the console
    console.log(data);

    //const saleItems = response.json

    console.log(data.Response.sales.data[2190858386].saleItems);
    
   // const xurItems = data.Response.sales.data[2190858386].saleItems.vendorItemIndex.itemHash;

   // Response.sales.data[2190858386].saleItems
  

})();
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note, this comes with some pitfalls.
// Learn more about service workers: https:// bit.ly/CRA-PWA
//serviceWorker.unregister();
