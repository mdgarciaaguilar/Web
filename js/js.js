let lista = document.getElementsByName('todo')
let elemento = document.getElementsByName('elementoLista')
var newitem = document.getElementById('newitem')
let todoList = document.getElementById('listaItems')

// Cuando un elemento se hace, se tacha el texto
todoList.addEventListener('click', function check() {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].checked) {
      elemento[i].classList.add('done')
    } else {
      elemento[i].classList.remove('done')
    }
  }
})


// Cuando se da enter, se agrega una tarea
newitem.addEventListener("keyup", function(agregarTarea) {
  if (agregarTarea.keyCode == 13) {
    agregarTarea.preventDefault()

    // Crear variables
    var span = document.createElement("span")
    span.setAttribute('name', "elementoLista")

    var input = document.createElement("input")
    input.name = "todo"
    input.type = "checkbox"
    input.value = elemento.length + 1

    var listElement = document.createElement("listElement")

    var text = document.createTextNode(newitem.value)

    if(newitem.value === ""){
    		alert("No puedes agregar una tarea vacía")
    } else {
 	   	span.appendChild(text)
 	    listElement.appendChild(input)
 	    listElement.appendChild(span)
 	    todoList.appendChild(listElement)
 	    newitem.value = ""
    }


  }
})
