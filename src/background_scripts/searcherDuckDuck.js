class SearcherDuckDuck extends Searcher{
    urlApi = "https://api.duckduckgo.com/?q="
    formato = "&format=json&pretty=1"

    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word+this.formato)
        let info = await response.json()
        return info
    }
    
}