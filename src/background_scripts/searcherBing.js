class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="
    searcher = 'Bing'

    filterInformation(html){
        return this.giveMeAnAnchor(Array.from(html.getElementsByClassName('b_algo')))
    }


}