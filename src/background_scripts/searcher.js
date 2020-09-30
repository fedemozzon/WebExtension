class Searcher{
    urlApi = ''
    searcher = ''

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

    //Convierte la pagina generada en una lista con los resultados
    htmlToResultList(html){
        let filterResult = this.filterInformation(html)
        console.log(filterResult)
        return filterResult.map((result) => this.toInformation(result.href,this.fromAPositionToText(filterResult.indexOf(result))+this.searcher ))
    }

    //Transforma el resultado devuelto en un objeto Information
    toInformation(urlTarget, description){
        return new Information(urlTarget,description)
    }
    //Cada buscador va a redefinir este en base a lo que necesite para parsear los resultados obtenidos
    filterInformation(html){
        return html
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

    //En base a una posición en un arreglo devuelvo la posición ordinal
    fromAPositionToText(position){
        switch (position){
            case 0: return 'Primer resultado de '
            case 1: return 'Segundo resultado de ' 
            case 2: return 'Tercer resultado de '
            case 3: return 'Cuarto resultado de '
            case 4: return 'Quinto resultado de '
            case 5: return 'Sexto resultado de '
            case 6: return 'Septimo resultado de '
            case 7: return 'Octavo resultado de '
            case 8: return 'Noveno resultado de '
            case 9: return 'Decimo resultado de '
            case 10: return 'Onceavo resultado de '
            case 11: return 'Decimo segundo resultado de '
        }
    }
}