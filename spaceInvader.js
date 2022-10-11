"use strict";

drawRectangles();

function drawRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 0;

    //links boven

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    context.fillStyle = '#66FF00';
    context.beginPath();
    context.rect(125, 125, 50, 50);
    context.fill();
    context.stroke();


    context.beginPath();
    context.rect(225, 125, 50, 50);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(175, 175, 50, 50);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(125, 225, 50, 50);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(225, 225, 50, 50);
    context.fill();
    context.stroke();






}
