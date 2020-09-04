class SearcherGoogle extends Searcher{
    apiKey = '&key=AIzaSyDTIkheilVgqy32eLvLXTNULmb12hGUGOw'
    urlApi = 'https://www.googleapis.com/customsearch/v1?q='
    //Esto es necesario solo en el de google, es para restringir los sitios a donde consultar
    searchEngineID = '&cx=1b34643d8855a23b6'

    searchOnTheWeb(word){
        fetch(this.urlApi+word+this.apiKey+this.searchEngineID).then((response) => {console.log(response.json()) })
    }
    
}