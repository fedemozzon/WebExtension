switch (window.location.host){
    case 'www.google.com':
        {
        page = new PageAumentationGoogle()
        break
    }
    case 'www.bing.com':
        {
        page = new PageAumentationBing()
        break
    }
    case 'duckduckgo.com':
        {
        page = new PageAumentationDuck()
        break
    }

}
page.insertButton()




