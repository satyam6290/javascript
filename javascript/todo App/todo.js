// let todo=[];
// let req = prompt("please enter your request");
//  while(true){
//  	if(req=="quit"){
//  		console.log("quitting app");
//  		break;
//  	}
//  	if(req=="list"){
//  		console.log("_________________");
//  		for(let i=0;i<todo.length;i++){
//  			console.log(i,todo[i]);
//  		}
//  		console.log("________________")
//  	}	
//  	else if (req=="add") {
//  		let task=prompt("please enter a task you want to enter");
//  		todo.push(task);
//  		console.log("todo added")
//  	}
//  	else if(req=="delete"){
//  		let idx=prompt("enter the index number which you want to delete");
//  		todo.splice(idx,1);
//  		console.log("task deleted");
//  	}
//  	else{
//  		console.log("invalid request");
//  	}
//  	req = prompt("please enter your request");
//  }

let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
	let item = document.createElement("li");
	item.innerText = inp.value;

	let delBtn = document.createElement("button");
	delBtn.innerText = "delete";
	delBtn.classList.add("delete");

	item.appendChild(delBtn);
	ul.appendChild(item);
	inp.value="";

});

 ul.addEventListener("click",function(event) {
	if(event.target.nodeName == "BUTTON"){
		let listItem = event.target.parentElement;
		listItem.remove();
		console.log("deleted");

	}
});

































