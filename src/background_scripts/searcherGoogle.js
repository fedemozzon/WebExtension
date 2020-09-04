class SearcherGoogle extends Searcher{
    apiKey = 'key=AIzaSyDTIkheilVgqy32eLvLXTNULmb12hGUGOw'
    urlApi = 'https://www.googleapis.com/customsearch/v1?'
    //Esto es necesario solo en el de google, es para restringir los sitios a donde consultar
    searchEngineID = '&cx=1b34643d8855a23b6'

    makeHTTPRequest(){
        fetch(this.urlApi+this.apiKey+this.searchEngineID+'&q=quesadilla').then((response) => {console.log(response.json()) })
    }
    
}