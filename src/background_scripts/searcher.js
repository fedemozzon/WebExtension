class Searcher{
    urlApi = ''

    //Realiza un HTTP Request según la url que tenga definido cada buscador
    searchOnTheWeb(word){
        fetch(this.urlApi).then((response) => {console.log(response.json()) })
    }
}