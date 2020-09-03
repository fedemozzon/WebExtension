class Searcher{
    urlApi = ''

    //Realiza un HTTP Request según la url que tenga definido cada buscador
     makeHTTPRequest(){
        fetch(this.urlApi).then((response) => {console.log(response.json()) })
    }
}