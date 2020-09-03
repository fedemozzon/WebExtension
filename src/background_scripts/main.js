console.log('aber')
//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener(function (message,_,sendResponse) {
console.log(message)
sendResponse({response:'olaaaaaaa'})
makeHTTPRequest()
return true
})

function makeHTTPRequest(){
    fetch('https://api.duckduckgo.com/?q=DuckDuckGo&format=json&pretty=1').then((response)=> console.log(response.json()))
}