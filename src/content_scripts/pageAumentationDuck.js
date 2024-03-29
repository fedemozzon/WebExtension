class PageAumentationDuck extends PageAumentation{

//Retorna una lista de los resultados para la primer página del buscador
resultList(){
    return document.getElementsByClassName('result__body links_main links_deep')
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
    // popup.className = 'b_dropdown b_hide'
    return popup
}

//Inserta botones con la posición en dos buscadores
insertSearchersButtons(fistSearcher,secondSearcher,element){
    this.insertImageButton(element.children[0],this.position(fistSearcher,element.children[0].children[0].href),this.imagenDuck)
    this.insertImageButton(element.children[0],this.position(secondSearcher,element.children[0].children[0].href),this.imagenGoogle)
}

//Copia una lista
copyAList(){
    return document.createElement('li')
}

//Detecta la barra de navegación donde insertar el botón que despliega el popup
detectBar(){
    return document.getElementsByClassName('zcm')[0]
}

//Copia un boton de la barra de Bing para que sea con el mismo estilo
copyButton(){
    return document.getElementsByClassName('dropdown  dropdown--date')[0].cloneNode()
}

//Copia un popup
clonePopup(){
    let elem = document.createElement('div')
    elem.className = 'modal--dropdown modal--dropdown--date modal modal--popover modal--popover--gray has-header js-dropdown-popout is-showing'
    elem.style = 'top: 103px; left: 554.828px; background:rgb(255 255 255 / 0%); display:none'
    this.setPopup(elem)
    return elem
}
//Esto crea los divs porque es imposible de clonar
setPopup(elem){
    let hijito3 = document.createElement('ol')
    hijito3.className = 'modal__list'
    let hijito1 = document.createElement('div')
    hijito1.className = 'modal__box'
    let hijito2 = document.createElement('div')
    hijito2.className = 'modal__body'
    let hijito = document.createElement('div')
    hijito.className = 'modal__wrap'
    hijito2.appendChild(hijito3)
    hijito1.appendChild(hijito2)
    hijito.appendChild(hijito1)
    elem.appendChild(hijito)
}

//Configuración de una página, cada página define el contenido que va a mostrar
copyClickButton(){
    let button = document.createElement('a')
    button.className = 'modal__list__link    js-dropdown-items'
    return button
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
    this.insertButtonsForAllResults(response.respuestaBing,response.respuestaGoogle)
}

//Crea un popup
makeAPopup(){
    let popup = this.clonePopup()
    this.addItemsForPopup(popup.children[0].children[0].children[0].children[0])
    document.getElementById('myButton').appendChild(this.initializePopup(popup))
}
    
}