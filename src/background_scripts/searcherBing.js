class SearcherBing extends Searcher{
    urlApi = "https://www.bing.com/search?q="

    htmlToResultList(html){
        return (this.giveMeAnAnchor(Array.from(html.getElementsByClassName('b_algo')))).map((result) => this.toInformation(result.href, result.text))
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