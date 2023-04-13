
// You can store the first item in the dom tree like this 
// var header = document.firstElementChild.firstElementChild 

// in query selector we can put id/class/or Tagname, we'll just have to add ., # in front of them to specify whether they are class or not
// in order to select more than one element you'll have to use querySelectorAll
document.querySelector("ul").lastElementChild.innerHTML="Chinu"

//Other methods of selecting the elements
document.getElementsByTagName("Li")[2].innerHTML = "Munnu"  //this is going to return us the list of elements with the tagname li

document.getElementsByClassName("list")[2].innerHTML = "<h1>Gunnu</h1>" // you can also put html in it

// document.getElementById("")

// class list will return you the list of classes associated with the element
document.querySelector("button").classList

// you can also add a new class to that list so that you can modify the style using that class
document.querySelector("button").classList.add("invisible")
document.querySelector("button").classList.toggle("invisible") // you can also use toggle to make it go on and off


// Following thing is literally going to return you the "Inner html", whatever it is 
// document.querySelector("li").innerHTML

// Follwing (text content) is going to return you the text content only not the html
document.querySelector("h1").innerText = "Bye "



// How to change the attributes of the elements
// first argument is the attribute you wanna change and second one is what you want to change it to
document.querySelector("a").setAttribute("href", "https://chiragdogra.com");

