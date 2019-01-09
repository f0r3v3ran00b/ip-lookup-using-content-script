const lookupIP = () => {
    fetch(`https://extreme-ip-lookup.com/json/`)
        .then((response) => {
            return response.json()
        }).
        then((jsonData) => {
            console.log(`Your IP is ${jsonData.query} / ${jsonData.city} / ${jsonData.country}`)
            $(`<div style="background-color: darkorange; color: black">Your IP is ${jsonData.query} ${jsonData.city}  ${jsonData.country}</div>`).prependTo('body');
            return jsonData
        })
        .catch((error) => {
            alert(error)
        })
}
lookupIP()