insertButton()
console.log(findWordSearched())
//Inserta un boton en la barra de Google
function insertButton(){
    element = document.getElementById('hdtb-msb')
    element.appendChild(copyButton())
}
//Copia un boton de la barra de Google para que sea con el mismo estilo
function copyButton(){
    button = document.getElementById('hdtb-tls').cloneNode()
    button.onclick = () => {makeAPopup()}
    button.textContent = 'Mashup Results'
    return button
}
//Toma del buscador la palabra buscada
function findWordSearched(){
    busqueda = document.getElementsByName('q')
    return busqueda[0].value
}

function makeAPopup(){
    popup = (document.getElementsByClassName('cF4V5c')[1]).cloneNode(true)
    element = document.getElementById('hdtb-msb')
    popup.style.display = 'block'
    element.appendChild(popup)
    console.log(popup)
    return element
}