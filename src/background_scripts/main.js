console.log('aber')
//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener(function (message,_,sendResponse) {
console.log(message)
console.log(sendResponse)
sendResponse({response:'olaaaaaaa'})
return true
})