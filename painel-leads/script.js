function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData('text/plain');

    var destinoId;
    if (event.target.firstElementChild == null)
        destinoId = " ";
    else
        destinoId = event.target.firstElementChild.id; // id da celula de destino    

    // if (!(data.includes("coluna1") && destinoId.includes("coluna3")))
        event.target.appendChild(document.getElementById(data));
}