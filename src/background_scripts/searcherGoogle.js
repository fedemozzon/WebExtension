class SearcherGoogle extends Searcher{
    urlApi = "https://www.google.com/search?q="
    searcher = 'Google'

    filterInformation(html){
        return this.giveMeAnAnchor(Array.from(html.getElementsByClassName('yuRUbf')))
    }


}