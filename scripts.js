//declaring & initializing
var myNodelist = document.getElementsByTagName("li");
const body = document.body;

// Create a new list item when clicking on the "Add" button
function newChoice() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("enterChoice").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Error");
  } else {
    document.getElementById("choices").appendChild(li);
  }
  document.getElementById("enterChoice").value = "";
}

// button click to pick a random li
function calcRandom() {
  var h1 = document.createElement("h1");
  var ranli = Math.floor(Math.random() * myNodelist.length);
  resultpost = myNodelist[ranli].textContent;
  var r = document.createTextNode(resultpost);
  h1.appendChild(r);
  console.log(ranli, myNodelist[ranli]); /*Working test ONLY */
  console.log(ranli);
  console.log(myNodelist[ranli]);
  console.log(myNodelist[resultpost.value]); /*<- one I want */
  document.getElementById("foodResult").appendChild(h1);
}


// themes
function cyanButton() {
  body.classList.replace("pinkCombo", "cyanCombo");
}


function pinkButton() {
  body.classList.replace("cyanCombo", "pinkCombo");
}

//*********************************************************
//failed code below for the randomizer
//*********************************************************

// var result = document.createElement("DIV");
// result.inner = document.createTextNode(ranli, myNodelist[ranli]);
// document.getElementByClassName("foodResult").appendChild(resultpost);

//   const result = document.createElement("H1");
//   result = Math.floor(Math.random() * myNodelist.length);
//   document.getElementsByClassName("foodResult").appendChild(result);
//
// }

  //
  // function myFunction() {
  //   var para = document.createElement("P");
  //   para.innerHTML = "This is a paragraph.";
  //   document.getElementById("myDIV").appendChild(para);
  // }

// }


 // document.getElementById("divide1n2").innerHTML = divide;


  // document.body.appendChild(result);

// div.className = "h1";
// div.appendChild(result);
//
//
//   var para = document.createElement("P");
//   para.innerText = "This is a paragraph.";
//   document.body.appendChild(para);





// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// myNodelist[i].appendChild(span);








//end
