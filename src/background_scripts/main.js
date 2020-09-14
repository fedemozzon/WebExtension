//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener((message,_,sendResponse) => {
(async () => {
duck = new SearcherDuckDuck()
google = new SearcherGoogle()
bing = new SearcherBing()
console.log(await duck.searchOnTheWeb(message.data))
sendResponse({
        respuestaDuck: 'palta',
        respuestaBing: 'papa'
    })
})()
return true
})
