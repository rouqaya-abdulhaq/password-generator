let symbolCheck = document.querySelector("#symbol");
let submitButton = document.querySelector("#submit");
let output = document.querySelector("#output");
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$&!";
var characterTypes = ["letter","number"];

const randomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));
	
const randomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));

const randomNumber = ()=>Math.floor(Math.random()*10);
	 
const isChecked =(checkBox)=>{
	return checkBox.checked;
}
// //there is a bug in this function it's returning isChecked false despite being true
const randomCharacterType =()=>{
// 	if (isChecked(symbolCheck) === true) {characterTypes.push("symbol")}
	return characterTypes[Math.floor(Math.random()*characterTypes.length)];
}

const generatPassword =()=>{
	let userNumberInput = document.querySelector("#length");
	let passwordLength = userNumberInput.value;
	let password ="";
	while (password.length<passwordLength){
		characterType = randomCharacterType();
		if (characterType ==="symbol"){
			password+= randomSymbol();
		}else if(characterType==="number"){
			password+= randomNumber();
		}else{password+= randomLetter();}
	}
	return password;
}
const display = ()=>{
	output.textContent = generatPassword();
}
//the password is being generated but it's disapearing in less than a second
submitButton.addEventListener("click",display); 

