class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="
    searcher = 'Bing'

    filter(html){
        return this.giveMeAnAnchor(Array.from(html.getElementsByClassName('b_algo')))
    }


}