let passwordLength = document.querySelector("#length");
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
//there is an issue with passing the passwordlength parameter in this function
const generatPassword =()=>{
	var password ="";
	while (password.length<8){
		characterType = randomCharacterType();
		if (characterType ==="symbol"){
			password+= randomSymbol();
		}else if(characterType==="number"){
			password+= randomNumber();
		}else{password+= randomLetter();}
	}
	return password;
}
//the password is being generated but it's not showing in the output
submitButton.addEventListener("click",()=>{output.textContenet =generatPassword()}); 
alert(generatPassword());
