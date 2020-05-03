import React, { Component } from 'react'
import './App.css'
import Xur from './components/Xur.js'
import XurInventory from './components/XurInventory.js'
import logo from './logo.svg'
import ManifestProvider from './providers/ManifestProvider.js'

const API_KEY = 'e11fc97c6507401087d9544f2117c0ed'
const XUR_HASH = '2190858386'

const XUR_CONVERTED_HASH = XUR_HASH >> 32


class App extends Component
{
    state = {
        vendor: null,
        vendorItems: {},
        vendorCategories: []
    }

    componentDidMount()
    {
        // Split our Xur code into it's own method. For technical reasons, it's needed for `await`
        // to work, but is also handy if we want to fetch xur at another time after the page loads
        this.getXur()
    }

    async getXur()
    {
        // fetch() is how we make API calls in browser now
        // `await` is an instruction to tell the JS to 'wait' until the API call has finished before
        // continuing on.
        const response = await fetch(
            'https://www.bungie.net/Platform/Destiny2/Vendors/?components=400,402,401,302',
            {headers: {'X-API-Key': API_KEY}} //config needed to pass through the API key
        )

        // Then we need to convert the response to actual JSON data that we can work with
        const data = await response.json()

        //console.log(data.Response.sales.data[2190858386].saleItems);

        // and then log it to the console
        console.log(data, 'app.js line 38')
        this.setState({
            vendor: data.Response.vendors.data[XUR_HASH],
            vendorItems: data.Response.sales.data[XUR_HASH].saleItems,
            vendorCategories: data.Response.categories.data[XUR_HASH].categories
        })
    }

    // this is where the magic happens
    render()
    {
        return (
            <ManifestProvider>
                <div className="App">
                    <Xur data={this.state.vendor}/>
                    <XurInventory
                        categories={this.state.vendorCategories}
                        items={this.state.vendorItems}
                    />
                </div>
            </ManifestProvider>
        )
    }
}

export default App
