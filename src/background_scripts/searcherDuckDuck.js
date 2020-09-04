class SearcherDuckDuck extends Searcher{
    urlApi = "https://api.duckduckgo.com/?q="
    formato = "&format=json&pretty=1"

    searchOnTheWeb(word){
        fetch(this.urlApi+word+this.formato).then((response) => {console.log(response.json()) })
    }
    
}