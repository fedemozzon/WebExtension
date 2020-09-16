//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener((message,_,sendResponse) => {
(async () => {
duck = new SearcherDuckDuck()
bing = new SearcherBing()
sendResponse({
        respuestaDuck: await duck.searchOnTheWeb(message.data),
        respuestaBing: await bing.searchOnTheWeb(message.data)
    })
})()
return true
})
