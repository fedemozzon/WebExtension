//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener((message,_,sendResponse) => {
(async () => {
duck = new SearcherDuckDuck()
google = new SearcherGoogle()
bing = new SearcherBing()
sendResponse({
        respuestaDuck: (await duck.searchOnTheWeb(message.data)).RelatedTopics,
        respuestaGoogle: await google.searchOnTheWeb(message.data),
        respuestaBing: (await bing.searchOnTheWeb(message)).webPages.value
    })
})()
return true
})
