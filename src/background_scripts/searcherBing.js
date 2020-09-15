class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="
    format = ''

    htmlToResultList(html){
        return html.getElementsByClassName('b_algo')
    }

}