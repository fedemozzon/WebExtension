//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener((message,_,sendResponse) => {
(async () => {
duck = new SearcherDuckDuck()
google = new SearcherGoogle()
bing = new SearcherBing()
sendResponse({
        respuestaDuck: await duck.searchOnTheWeb(message.data),
        respuestaGoogle: (await google.searchOnTheWeb(message.data)).items,
        respuestaBing: (await bing.searchOnTheWeb(message.data))
    })
})()
return true
})
