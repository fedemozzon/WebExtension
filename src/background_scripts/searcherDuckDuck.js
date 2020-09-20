class SearcherDuckDuck extends Searcher{
    urlApi = "https://duckduckgo.com/html/?kl=ar-es&q="
    searcher = 'DuckDuckGo'

    //En este caso reduzco el arreglo porque me da los resultados de varias páginas
    // En general no superan los 11 para la primer página
    filter(html){
        return ((Array.from(html.getElementsByClassName('result__a')).slice(0,11)))
    }

}