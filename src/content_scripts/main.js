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
    button.onclick = () => {showAPopup()}
    button.textContent = 'Mashup Results'
    return button
}
//Toma del buscador la palabra buscada
function findWordSearched(){
    busqueda = document.getElementsByName('q')
    return busqueda[0].value
}

function showAPopup(){
    if(document.getElementsByClassName('cF4V5c').length == 3){
        if (document.getElementsByClassName('cF4V5c')[2].style.display == 'none'){
            openPopup(document.getElementsByClassName('cF4V5c')[2])
        }
        else closePopup(document.getElementsByClassName('cF4V5c')[2])
    }
    else makeAPopup()
}
function closePopup(popup){
    console.log(popup)
    popup.style.display = 'none'
}
function openPopup(popup){
    popup.style.display = 'initial'
}
function makeAPopup(){
    popup = (document.getElementsByClassName('cF4V5c')[1]).cloneNode(true)
    element = document.getElementById('lb')
    popup.style.left = '864.898px'
    popup.style.top = '1119.5px'
    popup.role = 'menu'
    popup.tabIndex = '-1'
    element.appendChild(popup)
}