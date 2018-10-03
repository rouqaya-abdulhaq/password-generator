let submitButton = document.querySelector("#submit");
let output = document.querySelector("#output");
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$&!";
var characterTypes = ["letter","number","letter","number","letter"];

const randomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));
	
const randomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));

const randomNumber = ()=>Math.floor(Math.random()*10);
//if you wanted to add more features to the app that the user can choose and check	 
const isChecked =(checkBox)=>{
	return checkBox.checked;
}
//uses the isChecked function to see if the user checked symbol and adds symbol to the characterTypes
//and chooses a type randomly
//you can add more features like that such as capital letters
const randomCharacterType =()=>{
	let symbolCheck = document.querySelector("#symbol");
	if (isChecked(symbolCheck) === true) {characterTypes.push("symbol")}
	let character= characterTypes[Math.floor(Math.random()*characterTypes.length)];
    if (isChecked(symbolCheck) === true) {characterTypes.pop()}
    return character;
}
//generates a password 6 to 16 characters that starts with a letter
const generatPassword =()=>{
	let userNumberInput = document.querySelector("#length");
	let passwordLength = userNumberInput.value;
	let password = randomLetter();
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
	if (document.querySelector("#length").value<=16 && document.querySelector("#length").value>=6) {
		output.textContent = generatPassword();
	}else{
		output.textContent = "invalid length 6-16 only";
	}
	
}

submitButton.addEventListener("click",display);
submitButton.addEventListener("click",function(event){event.preventDefault()});

