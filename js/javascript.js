function disappear_father (element){
      
      element.parentElement.parentElement.removeChild(element.parentElement);

}

function disappear_element(element){
	element.parentElement.removeChild(element);
}


function add_palabraclave (){
	var element= document.getElementById("palabrasclave");
	var copy= element.children[0].cloneNode(true);
	if (copy.childNodes[1].innerHTML== "" && copy.style.display == "block") { return}
	
    copy.style.display= "block";
    element.insertBefore(copy,element.childNodes[0]);
}

// detectar que hay una nueva.
function validate(e,element) {
	if (e.keyCode==13) input_to_text(element);

}

function input_to_text(element){
	    console.log("aqui legue");
	    var h6= document.createElement("H6");
	    h6.className= "recuadro";
	    h6.innerHTML = element.value;
	    element.insertBefore(h6,element);
        disappear_element(element);

}