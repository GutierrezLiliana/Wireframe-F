// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("pats-silver");
}

function one(el){
	document.getElementById("one").classList.toggle("beach1");
}	

function two(el){
	document.getElementById("two").classList.toggle("beach2");
}	
	
function three(el){
	document.getElementById("three").classList.toggle("beach3");		
}

function four(el){
	document.getElementById("four").classList.toggle("beach4");		
}
