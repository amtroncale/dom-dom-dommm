let squareBtn = document.getElementsByClassName('btn')[0];
let squareContainer = document.getElementById('squares-container');

let counter = 0;
let colors = ["yellow", "red", "blue", "orange", "green"];

squareBtn.addEventListener('click', function () {

    let div = document.createElement('div');
    let divText = document.createTextNode(counter);
    
    div.className = 'square';
    squareContainer.appendChild(div);
    div.id = counter;
    counter++;

    div.addEventListener('click', function () {
        let randomColor = Math.floor(Math.random()*colors.length)
        div.style.backgroundColor = colors[randomColor]

    });

    div.addEventListener("mouseover", function () {
        div.appendChild(divText); 
    }) 

    div.addEventListener("mouseleave", function () {
        div.removeChild(divText);
    })

    div.addEventListener("dblclick", function () {
        if (div.id % 2 === 1) {
            console.log(div.previousSibling)
            squareContainer.removeChild(div.previousSibling);

            deleteBtn[i].addEventListener("click", function () {
                list.removeChild(this.parentNode);
              }, false);
        }else{}
    })

    div.addEventListener("dblclick", function () {
        if (div.id % 1 === 1) {
            console.log(div.previousSibling)
            squareContainer.removeChild(div.previousSibling);
            deleteBtn[i].addEventListener("click", function () {
                list.removeChild(this.parentNode);
              }, false);
        }else{}
    })
});