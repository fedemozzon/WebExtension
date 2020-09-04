//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener(function (message,_,sendResponse) {
console.log(message)
sendResponse({response:'olaaaaaaa'})
lolo = new SearcherDuckDuck()
lolo2 = new SearcherGoogle()
lolo.makeHTTPRequest()
lolo2.makeHTTPRequest()
return true
})