 var colors=generateRandomNumbers(6);
 var num=6;
 var squares=document.querySelectorAll(".square");
 var pickedColor=pickColor();
 var colorDisplay=document.getElementById("colorDisplay");
 var messageDisplay=document.querySelector("#message");
 var h1=document.querySelector("h1");
 var resetButton=document.querySelector("#reset");
 var easy=document.querySelector("#easybtn");
 var hard=document.querySelector("#hardbtn");

 colorDisplay.textContent=pickedColor;

 easy.addEventListener("click",function(){
 	easy.classList.add("selected");
 	hard.classList.remove("selected");
 	num=3;
 	colors=generateRandomNumbers(3);
 	messageDisplay.textContent="";
 	h1.style.background="steelblue";
 	pickedColor=pickColor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++)
 		if(colors[i])
 			squares[i].style.background=colors[i];
 		else
 			squares[i].style.display="none";
 });

 hard.addEventListener("click",function(){
 hard.classList.add("selected");
 easy.classList.remove("selected");
 num=6;
 messageDisplay.textContent="";
 h1.style.background="steelblue";
 colors=generateRandomNumbers(6);
  colorDisplay.textContent=pickedColor;
 	pickedColor=pickColor();
 	for(var i=0;i<squares.length;i++)
 	{
 			squares[i].style.background=colors[i];
            squares[i].style.display="block";
 	}
 });

resetButton.addEventListener("click",function(){
colors=generateRandomNumbers(num);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
	squares[i].style.background=colors[i];
h1.style.background="steelblue";
messageDisplay.textContent="";
this.textContent="NEW COLORS";
});

 for(var i=0;i<squares.length;i++)
 {
 	squares[i].style.background=colors[i];
 	squares[i].addEventListener("click",function(){
 		var clickedColor=this.style.background;
 		if(clickedColor==pickedColor)
 		{
 			messageDisplay.textContent="Correct!";
 			changeColor(clickedColor);
 			h1.style.background=clickedColor;
 			resetButton.textContent="Play Again!";
 		}
 		else
 		{
 			this.style.background="#232323";
 			messageDisplay.textContent="Try Again";
 		}
 	});
 }
 function changeColor(color)
 {
 	for(var i=0;i<squares.length;i++)
 	{
 		squares[i].style.background=color;
 	}
 }
 function pickColor()
 {
 	var ran=Math.floor(Math.random()*colors.length);
 	return(colors[ran]);
 }
 function generateRandomNumbers(num)
 {
 	var arr=[];
 	for(var i=0;i<num;i++)
    arr.push(randomColors());
 	return arr;
 }
 function randomColors()
 {
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return("rgb(" + r + ", " + g + ", " + b +")");
 }