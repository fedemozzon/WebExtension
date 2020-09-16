class SearcherDuckDuck extends Searcher{
    urlApi = "https://duckduckgo.com/html/?q="
    format = "" 

    //En este caso reduzco el arreglo porque me da los resultados de varias páginas
    // En general no superan los 11 para la primer página
    htmlToResultList(html){
        return Array.from(html.getElementsByClassName('links_main links_deep result__body')).slice(0,11)
    }

}