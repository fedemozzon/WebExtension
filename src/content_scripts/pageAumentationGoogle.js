class PageAumentationGoogle extends PageAumentation{

//Retorna una lista de los resultados para la primer página del buscador
resultList(){
    return document.getElementsByClassName('r')
}

//Toma del buscador la palabra buscada
findWordSearched(){
    return document.getElementsByName('q')[0].value
}

//Determina si ocultar o mostrar el popup
openOrClosePopup(){
    if (document.getElementById('myPopup').style.display == 'none') this.openPopup(document.getElementById('myPopup'))
    else this.closePopup(document.getElementById('myPopup'))
}

//Cierra un popup
closePopup(popup){
    popup.style.display = 'none'
}
//Abre un popup
openPopup(popup){
    popup.style.display = 'initial'
}

//Setea los valores del popup a crear
initializePopup(popup){
    popup.id = 'myPopup'
    popup.style.left = '864.898px'
    popup.style.top = '1119.5px'
    popup.style.display = 'none'
    popup.role = 'menu'
    popup.tabIndex = '-1'
    return popup
}

//Inserta botones con la posición en dos buscadores
insertSearchersButtons(fistSearcher,secondSearcher,element){
    this.insertImageButton(element,this.position(fistSearcher,element.children[0].href),this.imagenDuck)
    this.insertImageButton(element,this.position(secondSearcher,element.children[0].href),this.imagenBing)
}

//Copia una lista
copyAList(){
    return document.getElementsByClassName('f9UGee')[0].cloneNode()
}

detectBar(){
    return document.getElementById('hdtb-msb')
}

//Copia un boton de la barra de Google para que sea con el mismo estilo
copyButton(){
    return document.getElementById('hdtb-tls').cloneNode()
}

clonePopup(){
    return (document.getElementsByClassName('cF4V5c')[1]).cloneNode()
}

configPage(response,popup){
    this.addItemsForASearcher(response.respuestaBing,popup)
    this.addItemsForASearcher(response.respuestaDuck,popup)
    this.addItemsForASearcher(response.respuestaGoogle,popup)
    this.insertButtonsForAllResults(response.respuestaDuck,response.respuestaBing)
}

//Crea un popup
makeAPopup(){
    let popup = this.clonePopup()
    this.addItemsForPopup(popup)
    document.getElementById('lb').appendChild(this.initializePopup(popup))
}

}