document.body.onload = addElements;

function addImage(src, currentDiv) {
    const newDiv = document.createElement("div");
    const newImage = document.createElement("img");
    newImage.setAttribute('src', src)
    newDiv.setAttribute('class', 'item')
    newDiv.appendChild(newImage);
    currentDiv.appendChild(newDiv)
}

function addElements() {
    currentDiv = document.getElementsByClassName("container")[0];
    for(var i = 1; i <= 150; i++){
        file = "../media/imgs/"+i+".png"
        addImage(file, currentDiv)
    }
}
