class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="

    htmlToResultList(html){
        return (this.giveMeAnAnchor(Array.from(html.getElementsByClassName('b_algo')))).map((result) => this.toInformation(result.href, result.text))
    }


}