function C_func(){

	const displayDiv = document.getElementById("simple_code_C");
	const hideDiv1 = document.getElementById("simple_code_CPP");
	const hideDiv2 = document.getElementById("simple_code_Py");
	const hideDiv3 = document.getElementById("simple_code_Kt");
	// const btn = document.getElementById("cbtn");
	// btn.onclick = function () {
		displayDiv.style.display = "contents";
		hideDiv1.style.display = "none";
		hideDiv2.style.display = "none";
		hideDiv3.style.display = "none";
  	// };

}

function CPP_func(){

	const hideDiv1 = document.getElementById("simple_code_C");
	const displayDiv = document.getElementById("simple_code_CPP");
	const hideDiv2 = document.getElementById("simple_code_Py");
	const hideDiv3 = document.getElementById("simple_code_Kt");
	// const btn = document.getElementById("cppbtn");
	// btn.onclick = function () {
		displayDiv.style.display = "contents";
		hideDiv1.style.display = "none";
		hideDiv2.style.display = "none";
		hideDiv3.style.display = "none";
  	// };

}

function Py_func(){

	const hideDiv1 = document.getElementById("simple_code_C");
	const hideDiv2 = document.getElementById("simple_code_CPP");
	const displayDiv = document.getElementById("simple_code_Py");
	const hideDiv3 = document.getElementById("simple_code_Kt");
	// const btn = document.getElementById("pybtn");
	// btn.onclick = function () {
		displayDiv.style.display = "contents";
		hideDiv1.style.display = "none";
		hideDiv2.style.display = "none";
		hideDiv3.style.display = "none";
  	// };

}

function Kotlin_func(){

	const hideDiv1 = document.getElementById("simple_code_C");
	const hideDiv2 = document.getElementById("simple_code_CPP");
	const hideDiv3 = document.getElementById("simple_code_Py");
	const displayDiv = document.getElementById("simple_code_Kt");
	// const btn = document.getElementById("ktbtn");
	// btn.onclick = function () {
		displayDiv.style.display = "contents";
		hideDiv1.style.display = "none";
		hideDiv2.style.display = "none";
		hideDiv3.style.display = "none";
  	// };

}

var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete() {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle("complete");
}

toggleButton.onclick = toggleComplete;

// function C_func() {
// 	var c_code = document.getElementById("simple_code");
// 	var c_code = text('while (!energyDepleted()) {"<br>&emsp;&emsp;printf("%d", research(&effort));<br>&emsp;&emsp;printf("%d", learn(&effort));<br>&emsp;&emsp;printf("%d", implement(&effort));<br>}').innerHTML
// 	document.getElementById("simple_code").innerHTML = c_code
// }
												  
// function CPP_func() {
// 	document.getElementById("simple_code").innerHTML = text('while (!energyDepleted()) {<br>&emsp;&emsp;"cout<<research(&effort);<br>&emsp;&emsp;cout<<learn(&effort);<br>&emsp;&emsp;cout<<implement(&effort);<br>}').innerHTML
// }

// function Py_func() {
// 	document.getElementById("simple_code").innerHTML = "none";
// }

// function Kotlin_func() {
// 	document.getElementById("simple_code").innerHTML = "none";
// }

// var entityMap = {
// 	'&': '&amp;',
// 	'<': '&lt;',
// 	'>': '&gt;',
// 	'"': '&quot;',
// 	"'": '&#39;',
// 	'/': '&#x2F;',
// 	'`': '&#x60;',
// 	'=': '&#x3D;'
//   };
  
//   function escapeHtml (string) {
// 	return String(string).replace(/[&<>"'`=\/]/g, function (s) {
// 	  return entityMap[s];
// 	});
//   }