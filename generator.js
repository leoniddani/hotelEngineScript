function loadPage(){
    var divToGenerate = document.createElement("div");
    divToGenerate.id = "thisisthegenerateddDiv"
    var parentElement= document.getElementById("Booking-Generator").parentElement.appendChild(divToGenerate);
    parentElement.innerHTML = iframe();
}
function iframe(){
    var bindIframe = `<iframe height="100px" src="generator.html" frameBorder="0"></iframe>`;
    return bindIframe;
}
loadPage();