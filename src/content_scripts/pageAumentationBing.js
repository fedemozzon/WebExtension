class PageAumentationBing extends PageAumentation{

//Retorna una lista de los resultados para la primer página del buscador
resultList(){
    return document.getElementsByClassName('b_algo')
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
    popup.className = 'b_dropdown'
    popup.style.display = 'none'
    return popup
}

//Inserta botones con la posición en dos buscadores
insertSearchersButtons(fistSearcher,secondSearcher,element){
    this.insertImageButton(element.children[0],this.position(fistSearcher,element.children[0].children[0].href),this.imagenDuck)
    this.insertImageButton(element.children[0],this.position(secondSearcher,element.children[0].children[0].href),this.imagenGoogle)
}

//Copia una lista
copyAList(){
    return document.getElementsByClassName('ftrD')[0].cloneNode()
}

//Detecta la barra de navegación donde insertar el botón que despliega el popup
detectBar(){
    return document.getElementById('b_tween')
}

//Copia un boton de la barra de Bing para que sea con el mismo estilo
copyButton(){
    return document.getElementsByClassName('ftrB')[2].cloneNode()
}
//Copia un popup
clonePopup(){
    return (document.getElementsByClassName('b_dropdown')[2]).cloneNode()
}
//Copia un anchor de una lista porque en general los items de una lista son un anchor andentro de un div
copyClickButton(){
    return document.getElementsByClassName('b_toggle')[0].cloneNode()
}

// Copia un item de la lista 
copyItemFromAList(url,text){
    let item = this.copyAList()
    let clickButton = this.copyClickButton()
    this.setItemList(clickButton, text,url)
    item.appendChild(clickButton)
    return item

}
//Configuración de una página, cada página define el contenido que va a mostrar
configPage(response,popup){
    this.addItemsForASearcher(response.respuestaBing,popup)
    this.addItemsForASearcher(response.respuestaDuck,popup)
    this.addItemsForASearcher(response.respuestaGoogle,popup)
    this.insertButtonsForAllResults(response.respuestaDuck,response.respuestaGoogle)
}

//Crea un popup
makeAPopup(){
    let popup = this.clonePopup()
    this.addItemsForPopup(popup)
    document.getElementById('myButton').appendChild(this.initializePopup(popup))
}
    
}