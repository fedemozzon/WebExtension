class Searcher{
    urlApi = ''
    format = ''

    //Realiza un HTTP Request según la url que tenga definido cada buscador
    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word+this.format)
        return this.convertToHTML(await response.text())
    }
    //Convierte el texto recuperado de buscar a html
    convertToHTML(page){
        return new DOMParser().parseFromString(page, "text/html")
    }
}