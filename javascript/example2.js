// let btn = document.querySelector("button");

// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
// 	let image = await getimage();
// 	// console.log(fact);
// 	let p = document.querySelector("#result");
// 	p.setAttribute("src",image);
// });

// async function getimage() {
// 	try{
// 		let res = await axios.get(url2);
// 	     // console.log(res)
// 		return res.data.message;

// 	}catch(e){
// 		console.log("errror~",e);
// 		return "no Image found";
// 	}
// }













// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
// 	let fact = await getfacts();
// 	console.log(fact);
// 	let p = document.querySelector("#result");
// 	p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";

// async function getfacts() {
// 	try{
// 		let res = await axios.get(url);
// 		return res.data.fact;

// 	}catch(e){
// 		console.log("errror~",e);
// 		return "no fact found";
// 	}
// }
//to send header
// const url = " https://icanhazdadjoke.com/";

//  async function getjokes() {
//  	try{
//  		const config = { headers: { Accept: "application/json" } };
//  		let res = await axios.get(url,config);
//  		console.log(res.data);
//  	}catch(err) {
//     console.log(err);
//  	}
//  }
// to find college
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
	let country = document.querySelector("input").value;
	console.log(country);

	let colArr = await getcollege(country);
	show(colArr);

});
function show(colArr){
	let list = document.querySelector("#list");
	list.innerText = "";

	for(col of colArr) {
		console.log(col.name);

	let li = document.createElement("li");
	li.innerText = col.name;
	list.appendChild(li);	
	}
}

 async function  getcollege(country) {
 	try{
 		let res = await axios.get(url + country);
 		return res.data;
 	}catch (e) {
 		console.log("error : ", e);
 		return [];

 	}
 }