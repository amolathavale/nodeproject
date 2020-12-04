var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq";

img.onload = () => { 
        ctx.drawImage(img, 0, 0) 
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
    }



//Solid fill
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);

// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 300, 190);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 580, 380);

// //Draw Line
// ctx.moveTo(150, 80);
// ctx.lineTo(300, 300);
// ctx.stroke();

// //Draw Circle
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

//Add Text
