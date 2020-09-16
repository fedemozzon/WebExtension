class SearcherDuckDuck extends Searcher{
    urlApi = "https://duckduckgo.com/html/?q="
    format = "" 

    //En este caso reduzco el arreglo porque me da los resultados de varias páginas
    // En general no superan los 11 para la primer página
    htmlToResultList(html){
        return ((Array.from(html.getElementsByClassName('result__a')).slice(0,11)).map((result) => this.toInformation(result.href, result.text)))
    }

}