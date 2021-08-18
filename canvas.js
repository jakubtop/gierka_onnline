//Złapanie cavasa z pliku html
const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

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


//Sterowanie Graczem 

//Pozycja Gracza
const playerPositionX = getWidth()/2;
const playerPositionY = getHeight()/2;

//Rednerowanie Gry
const renderPlayground = () => {
    //Gracz
    ctx.beginPath();
    ctx.arc(playerPositionX,playerPositionY,20,0,2*Math.PI);
    ctx.fillRect(playerPositionX,playerPositionY-15,40,10);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();

 
}

setCanvasDimensions();
renderPlayground();

//Testy
//Jaką wartość zwraca getWidth i getHeight
console.log(getHeight());
console.log(getWidth());