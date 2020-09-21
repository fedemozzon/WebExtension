console.log(window.location.host)
switch (window.location.host){
    case 'www.google.com':
        {
        page = new PageAumentationGoogle()
        page.insertButton()
        break
    }
    case 'www.bing.com':
        {
        page = new PageAumentationBing()
        console.log('estoy en bing')
        console.log(page)
        page.insertButton()
        break
    }
    case 'duckduckgo.com':
        {
        page = new PageAumentationDuck()
        console.log('estoy en duck')
        console.log(page)
        break
    }
}




