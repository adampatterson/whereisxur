const API_KEY = "e11fc97c6507401087d9544f2117c0ed";

(async function() {
    const response = await fetch(
        "https://www.bungie.net/Platform/Destiny2/Vendors/?components=400,402,401/",
        { headers: { "X-API-Key" : API_KEY } } // config needed to pass through API key
    );
    
    // blah blah converts shit
    const data = await response.json();

    // then log it to the console
    console.log(data);


})();