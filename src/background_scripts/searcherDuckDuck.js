class SearcherDuckDuck extends Searcher{
    urlApi = "https://html.duckduckgo.com/html/?kl=ar-es&q="
    searcher = 'DuckDuckGo'

    //En este caso reduzco el arreglo porque me da los resultados de varias páginas
    // En general no superan los 11 para la primer página
    filterInformation(html){
        return this.giveMeAnAnchor(((Array.from(html.getElementsByClassName('result__title')).slice(0,11))))
    }

}