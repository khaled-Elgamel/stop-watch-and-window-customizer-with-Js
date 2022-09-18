
let myWindow;
function newwindow()
{
    myWindow = window.open("page4.html", "_blank", "width=300,height=300");
    
}
function closewin(){
    myWindow.close();

}

function moveTo(){
    myWindow.close();
    myWindow = window.open("page4.html", "_blank", "width=300,height=300");
    myWindow.moveTo(500, 100);

}
function moveBy(){
    myWindow.close();
    myWindow = window.open("page4.html", "_blank", "width=300,height=300");
    myWindow.moveBy(250, 250);
}
function resizeTo(){
    myWindow.close();
    myWindow = window.open("page4.html", "_blank", "width=300,height=300");
    myWindow.resizeTo(600, 600);


}
function resizeBy(){
    myWindow.close();
    myWindow = window.open("page4.html", "_blank", "width=300,height=300");
    myWindow.resizeBy(700, 700);
}

