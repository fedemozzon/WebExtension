//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener(function (message,_,sendResponse) {
console.log(message)
sendResponse({response:'olaaaaaaa'})
lolo = new SearcherDuckDuck()
lolo2 = new SearcherGoogle()
lolo.searchOnTheWeb(message.data)
lolo2.searchOnTheWeb(message.data)
return true
})