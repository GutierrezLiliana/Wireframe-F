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

function beach(el){
	document.getElementById("one").src = ("images/beach1.jpg");
	document.getElementById("two").src = ("images/beach2.jpg");
	document.getElementById("three").src = ("images/beach3.jpg");
	document.getElementById("four").src = ("images/beach4.jpg");
	document.getElementById("one").classList.toggle("flower3");
	document.getElementById("two").classList.toggle("beach2");
}