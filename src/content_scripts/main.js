document.querySelector("body") .style["background-color"] = "yellow";
element = document.getElementById('hdtb-msb')
boton = document.getElementById('hdtb-tls').cloneNode()
boton.textContent = 'Extension'
element.appendChild(boton)
console.log('es amarillooo')
console.log(boton.textContent)
