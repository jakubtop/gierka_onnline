//Złapanie cavasa z pliku html
const canvas = document.getElementById('playground');
const c = canvas.getContext('2d');

//Ustawienie canvasa na cały rozmiar okna
const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;
const setCanvasDimensions = () => {
    canvas.width = getWidth();
    canvas.height = getHeight();
}

//Odświeżanie canvasa przy zmianie rozmiaru okna
window.addEventListener('resize', () => {
    setCanvasDimensions();
    renderPlayground();
});

//Stworzenie wzoru Gracza
class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, 20,0,2*Math.PI);
        c.fillRect(this.x,this.y-15,40,10);
        c.fillStyle = 'green';
        c.fill();
        c.stroke();
    }

}
//Pozycja Gracza
let playerPositionX = getWidth()/2;
let playerPositionY = getHeight()/2;

//Sterowanie Graczem
var W_pressed = false;
var A_pressed = false;
var S_pressed = false;
var D_pressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "w") {
        W_pressed = true;
        console.log(W_pressed);
        console.log(playerPositionY);
    }
    else if(e.key =="a") {
        A_pressed = true;
        console.log(A_pressed);
        console.log(playerPositionX);
    }
    else if(e.key =="s") {
        S_pressed = true;
        console.log(S_pressed);
        console.log(playerPositionY);
    }
    else if(e.key =="d") {
        D_pressed = true;
        console.log(D_pressed);
        console.log(playerPositionX);
    }
}
function keyUpHandler(e) {
    if(e.key == "w") {
        W_pressed = false;
    }
    else if(e.key =="a") {
        A_pressed = false;
    }
    else if(e.key =="s") {
        S_pressed = false;
    }
    else if(e.key =="d") {
        D_pressed = false;
    }
}
let X = 10;
console.log(X);
if(W_pressed) {
    X -= 10;
    playerPositionY += 5;
    console.log(X);
    renderPlayground();
}
else if(S_pressed) {
    playerPositionY -= 5;
    renderPlayground();
}
else if(D_pressed) {
    playerPositionX += 5;
    renderPlayground();
}
else if(A_pressed) {
    playerPositionX -= 5;
    renderPlayground();
}

//Rednerowanie Gry
const renderPlayground = () => {
    const player = new Player(playerPositionX,playerPositionY);
    player.draw();
}

setCanvasDimensions();
renderPlayground();

//Testy
//Jaką wartość zwraca getWidth i getHeight
console.log(getHeight());
console.log(getWidth());

console.log(W_pressed);
console.log(S_pressed);
