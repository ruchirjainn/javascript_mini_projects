var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    document.getElementById("bitcoin").innerHTML = response.bitcoin.inr;
    document.getElementById("ethereum").innerHTML = response.ethereum.inr;
    document.getElementById("dogecoin").innerHTML = response.dogecoin.inr;
});

