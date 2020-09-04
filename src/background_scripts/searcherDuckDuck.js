class SearcherDuckDuck extends Searcher{
    urlApi = "https://api.duckduckgo.com/?q=falafel"
    formato = "&format=json&pretty=1"

    makeHTTPRequest(){
        fetch(this.urlApi+this.formato).then((response) => {console.log(response.json()) })
    }
    
}