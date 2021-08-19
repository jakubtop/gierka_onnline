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

//Pozycja Gracza
let playerPositionX = getWidth()/2;
let playerPositionY = getHeight()/2;

const checkPlayerPosition = () => {
    if(playerPositionX <=20){
        playerPositionX = 20;
    } else if (playerPositionX >= getWidth()-20) {
        playerPositionX = getWidth()-20;
    } else if (playerPositionY <=20) {
        playerPositionY = 20;
    } else if (playerPositionY >= getHeight()-20) {
        playerPositionY = getHeight()-20;
    }
}
//Sterowanie Grazem
//WASD
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    if(e.key == "w") {
        playerPositionY -= 10;
        checkPlayerPosition();
    }
    else if(e.key =="a") {
        playerPositionX -= 10;
        checkPlayerPosition();
    }
    else if(e.key =="s") {
        playerPositionY += 10;
        checkPlayerPosition();
    }
    else if(e.key =="d") {
        playerPositionX += 10;
        checkPlayerPosition();
    }
}
//Stworzenie wzoru Gracza
class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, 20,0,2*Math.PI);
        c.fillStyle = 'green';
        c.fill();
        c.stroke();
    }
    update() {
        this.draw();
        this.x = playerPositionX;
        this.y = playerPositionY;
    }
}
const player = new Player(playerPositionX,playerPositionY);

//Strzelanie
class Bullet {
    constructor(x,y,velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, 3,0,2*Math.PI);
        c.fillStyle = 'yellow';
        c.fill();
    } 
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}
const bullet = new Bullet(playerPositionX,playerPositionY,{x:1, y:1});
const bullets = [];

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    bullets.forEach(bullet => {
        bullet.update();
    });
    player.update();
    console.log('pozycja x:'+ playerPositionX + 'pozycja y:' + playerPositionY);
}
window.addEventListener('click', (e) => {
    const angle = Math.atan2(e.clientY - playerPositionY,e.clientX - playerPositionX);
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    console.log(angle);
    bullets.push(new Bullet(playerPositionX,playerPositionY,velocity));
})
animate();
setCanvasDimensions();
