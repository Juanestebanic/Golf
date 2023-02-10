
// Crea la variable de canvas 
var canvas = new fabric.Canvas("myCanvas")
dibujo = canvas.getContext("2d")
//Establece las posiciónes para la pelota y el agujero.
ball_y = 100;
ball_x = 50;
hole_y = 400;
hole_x = 300;
var alto = 50;
var ancho = 50;
var altohoyo = 60;
var anchohoyo = 60;

var pelota = "ball.png"
var hoyo = "golf-h.png"
var pasto = "Grass.jpg"

function inicial(){
		ponerfondo = new Image()
		ponerfondo.onload = cargarfondo
		ponerfondo.src = pasto

		ponerpelota = new Image()
		ponerpelota.onload = cargarpelota
		ponerpelota.src = pelota

		ponerhoyo = new Image()
		ponerhoyo.onload = cargarhoyo
		ponerhoyo.src = hoyo
	
}

function cargarfondo(){
dibujo.drawImage(ponerfondo,0 ,0 ,canvas.width, canvas.height)
}
function cargarhoyo(){
dibujo.drawImage(ponerhoyo,400 ,300 ,anchohoyo, altohoyo)
}
function cargarpelota(){
dibujo.drawImage(ponerpelota, ball_x ,ball_y ,ancho, alto)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	
	if ((ball_x==400)&&(ball_y==300)){
		document.getElementById("hd3").innerHTML="!!!LO LOGRASTE!!!";
		document.getElementById("myCanvas").style.borderColor="red"	;
	}
	
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}	
	
	function up()
	{
		// Escribe el código para mover la pelota hacia arriba.
		if(ball_y >=0)
		{ball_y = ball_y - 10;
		cargarfondo()
		cargarhoyo()
		cargarpelota()
	}}

	function down()
	{
		 // Escribe el código para mover la pelota hacia abajo.
		 if(ball_y <=450)
		{ball_y = ball_y + 10;
		cargarfondo()
		cargarhoyo()
		cargarpelota()
	}}

	function left()
	{
		if(ball_x >5)
		{	ball_x = ball_x - 10;
		cargarfondo()
		cargarhoyo()
		cargarpelota()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe el código para mover la pelota hacia la derecha.
			ball_x = ball_x + 10;
		cargarfondo()
		cargarhoyo()
		cargarpelota()
		}
	}
	


