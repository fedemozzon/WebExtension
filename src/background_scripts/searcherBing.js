class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="
    format = ''

    htmlToResultList(html){
        return Array.from(html.getElementsByClassName('b_algo'))
    }

}