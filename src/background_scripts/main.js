//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
chrome.runtime.onMessage.addListener((message,_,sendResponse) => {
(async () => {
duck = new SearcherDuckDuck()
google = new SearcherGoogle()
cosa = await duck.searchOnTheWeb(message.data)
cosa2 = await google.searchOnTheWeb(message.data)
sendResponse({
        respuestaDuck: cosa,
        respuestaGoogle: cosa2,
        respuestaBing: 'lolo'
    })
})()
return true
})

function respuestaBing(message){
    bing = new SearcherBing()
    bing.searchOnTheWeb(message.data).then(data => {
        console.log(data.webPages)
        return data.webPages
    })
}