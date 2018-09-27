let submitButton = document.querySelector("#submit");
let output = document.querySelector("#output");
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$&!";
var characterTypes = ["letter","number","letter","number","letter"];

const randomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));
	
const randomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));

const randomNumber = ()=>Math.floor(Math.random()*10);
	 
const isChecked =(checkBox)=>{
	return checkBox.checked;
}

const randomCharacterType =()=>{
	let symbolCheck = document.querySelector("#symbol");
	if (isChecked(symbolCheck) === true) {characterTypes.push("symbol")}
	let character= characterTypes[Math.floor(Math.random()*characterTypes.length)];
    if (isChecked(symbolCheck) === true) {characterTypes.pop()}
    return character;
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

submitButton.addEventListener("click",display); 
submitButton.addEventListener("click",function(event){event.preventDefault()});

