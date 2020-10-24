//El parametro _ es porque en segundo lugar espera otro parametro, si no está, no anda
browser.runtime.onMessage.addListener((message,_,sendResponse) => {
    (async () => {
    duck = new SearcherDuckDuck()
    bing = new SearcherBing()
    google = new SearcherGoogle()
    extension = new BackgroundExtension();
    extension.connect();
    sendResponse({
            respuestaDuck: await duck.searchOnTheWeb(message.data),
            respuestaBing: await bing.searchOnTheWeb(message.data),
            respuestaGoogle: await google.searchOnTheWeb(message.data),
        })
    })()
    return true
    })