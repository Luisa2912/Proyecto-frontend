let loadMoreBtn =document.querySelector("#load-more");
let currentItem = 4;

loadMoreBtn.onclick =  () => {
    let boxes = [...document.querySelectorAll(".box-container .box")];
    for(var i = currentItem; i< currentItem + 4; i++){
        boxer[i].style.display = "inline-block"
    }
currentItem +=4;
if(currentItem >= boxes.length){
    loadMoreBtn.style.display = "nome"
}
}

//carrito

const carrito = document.getElementById("carrito");
const elementos1 = documt.getElementById("lista-1");
const lista = document.getElementById("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEvenlistener("click", comprsrElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click",vaciarCarrito)
}


function comprarElemento(e){
    e.preventDefaut();

    if(e.target.classList.contains("agregar-carrito")){
        const elemento = e.target.parentElement.preventElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const inforElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(inforElemento)
}

function insertarCarrito(elemento){

    const row = document.createElement("tr");
    row.innerHTML = `
    
        <td>
        <img src="${elemento.imagen}" width=100 /> 
        </td>

        <td>
        ${elemento.titulo}
        </td>
        
        <td>
        ${elemento.precio}
        </td>
        
        <td>

        <a herf="#" class="data-id=">${elemento.id0}"  </a>
        
        </td>
    `;
    
lista.appendChild(row);

}

function eliminarElemento(e){

    e.parentDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    } 
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}