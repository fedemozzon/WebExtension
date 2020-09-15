class Searcher{
    urlApi = ''
    format = ''

    //Realiza un HTTP Request según la url que tenga definido cada buscador
    //Podría haber una suerte de template method para la búsqueda en la web
    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word+this.format)
        return this.htmlToResultList(this.convertToHTML(await response.text())) 
    }
    //Convierte el texto recuperado de buscar a html
    convertToHTML(page){
        return new DOMParser().parseFromString(page, "text/html")
    }

    //Convierte la pagina generada en una lista con los resultados, cada buscador la redefine en base a como aparece para ellos
    htmlToResultList(html){
        return html
    }
    //En base a un resultado devuelve la posición para la primer página del buscador, si no está devuelve -
    position(result){

    }
}