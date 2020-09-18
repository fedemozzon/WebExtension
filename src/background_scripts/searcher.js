class Searcher{
    urlApi = ''
    results = ''

    //Realiza un HTTP Request según la url que tenga definido cada buscador
    //Podría haber una suerte de template method para la búsqueda en la web
    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word)
        this.results = this.htmlToResultList(this.convertToHTML(await response.text()))
        return  this.results
    }
    //Convierte el texto recuperado de buscar a html
    convertToHTML(page){
        return new DOMParser().parseFromString(page, "text/html")
    }

    //Convierte la pagina generada en una lista con los resultados, cada buscador la redefine en base a como aparece para ellos
    htmlToResultList(html){
    }

    //Transforma el resultado devuelto en un objeto Information

    toInformation(urlTarget, description){
        return new Information(urlTarget,description)
    }
    
    //Extrae un <a> desde el div que recupera, como no tiene una clase para distinguirlos
    //Voy sacando hasta llegar al elemento
    giveMeAnAnchor(elementList){
        return elementList.map((element)=> {
            while(element.nodeName != 'A') {
                element = element.children[0]
            }
            return element
        })
    }
}