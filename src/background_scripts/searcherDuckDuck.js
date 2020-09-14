class SearcherDuckDuck extends Searcher{
    urlApi = "https://duckduckgo.com/?q="
    formato = "&t=h_&ia=web"

    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word+this.formato)
        return this.parseResponse((await response.text())) 
    }

    parseResponse(html){
        console.log(html)
        console.log(new DOMParser().parseFromString(html, "text/html"))
        let links = new DOMParser().parseFromString(html, "text/html").getElementById('links')
        links.className = "results js-results"
        return links
    }
    
}