
var mybtn=document.createElement("button")
mybtn.innerHTML="This is your link"
mybtn.style.backgroundColor="green"
mybtn.style.color="white"
mybtn.style.marginLeft="540px"
mybtn.style.margintop="50px"
mybtn.style.borderRadius="10px"
mybtn.style.borderColor="green"
mybtn.style.fontweight="bold"
mybtn.style.width="180px"
mybtn.style.height="50px"
mybtn.style.fontSize="larger"
function show()
{

var myTimeOut = setTimeout(function () {
    
    document.body.append(mybtn)

}, 3000)

}
