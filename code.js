let submitButton = document.querySelector("#submit");
let output = document.querySelector("#output");
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$&!";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//to have more letters and numbers than anything in the password i repeated the words
let characterTypes = ["letter","number","letter","number","letter"];

//functions that return a random characters using the arrays above
const randomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));
const randomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));
const randomCapital =()=> capitalLetters.charAt(Math.floor(Math.random()*capitalLetters.length));
const randomNumber = ()=>Math.floor(Math.random()*10);

	 
const isChecked =(checkBox)=>{
	return checkBox.checked;
}

//uses the isChecked function to see if the user checked symbol and adds symbol to the characterTypes
//and chooses a type randomly
//you can add more features like that 
const randomCharacterType =()=>{
	let symbolCheck = document.querySelector("#symbol");
	let capitalCheck = document.querySelector("#capital-letter");
	//if the user checked the symbol checkbox
	if (isChecked(symbolCheck) === true) {characterTypes.push("symbol")}
    //if the user checked the capital letter checkbox	
    if (isChecked(capitalCheck) === true) {characterTypes.push("capitalLetter")}

	let character= characterTypes[Math.floor(Math.random()*characterTypes.length)];
    //to delete the characters after they have been checked so they dont fill the array 
    if (isChecked(capitalCheck) === true) {characterTypes.pop()}
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
		}else if (characterType==="capitalLetter"){
			password+= randomCapital();
			}
			else if(characterType==="number"){
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

