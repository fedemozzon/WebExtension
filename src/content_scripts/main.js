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
    button.onclick = () => alert('anda')
    button.textContent = 'Extensión'
    return button
}
//Toma del buscador la palabra buscada
function findWordSearched(){
    busqueda = document.getElementsByName('q')
    return busqueda[0].value
}