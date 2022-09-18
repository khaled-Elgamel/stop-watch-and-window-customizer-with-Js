



//var myInterval = setInterval(function () {
    //     console.log("hello");
    // }, 2000)

    var cnt = 0;
function start() {
    
        check = setInterval(function () {
            cnt += 1;
            document.getElementById("para").innerHTML = "Count is : "+cnt;
        }, 1000);
}


function stop() {
    clearInterval(check);
    document.getElementById("para").innerHTML = "Count is : "+cnt;
}
function reset()
{

    cnt=0
    document.getElementById("para").innerHTML = "Count is : "+cnt;
}