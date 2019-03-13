const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$&!";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolCheck = document.querySelector("#symbol");
const capitalCheck = document.querySelector("#capital-letter");
const userNumberInput = document.querySelector("#length");
//to have more letters and numbers than anything in the password i repeated the words
let characterTypes = ["letter","number","letter","number","letter"];


const generateRandomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));
const generateRandomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));
const generateRandomCapital =()=> capitalLetters.charAt(Math.floor(Math.random()*capitalLetters.length));
const generateRandomNumber = ()=>Math.floor(Math.random()*10);


	 
const isChecked =(checkBox)=>{
	return checkBox.checked;
}

const isSymbolChecked = ()=>{
	if (isChecked(symbolCheck) === true) {characterTypes.push("symbol")}
}
const isCapitalChecked = ()=>{
	if (isChecked(capitalCheck) === true) {characterTypes.push("capitalLetter")}
}
const checkBoxes = ()=>{
	isSymbolChecked();
	isCapitalChecked();
}
const deleteChecked = ()=>{
	if (isChecked(capitalCheck) === true) {characterTypes.pop()}
    if (isChecked(symbolCheck) === true) {characterTypes.pop()}	
}
const generateCharacter = ()=>{
	return characterTypes[Math.floor(Math.random()*characterTypes.length)];
}
 
const randomCharacterType =()=>{
	checkBoxes();
	let character= generateCharacter();
	//delete the checked characters so they don't fill up the array
    deleteChecked();	
    return character;
}

const generatPassword =()=>{
	let passwordLengthChoice = userNumberInput.value;
	//so the password will always start with a small letter
	let password = generateRandomLetter();
	while (password.length<passwordLengthChoice){
		characterType = randomCharacterType();
		if (characterType ==="symbol"){
			password+= generateRandomSymbol();
		}else if (characterType==="capitalLetter"){
			password+= generateRandomCapital();
			}
			else if(characterType==="number"){
				password+= generateRandomNumber();
			}else{password+= generateRandomLetter();}
	}
	return password;
}

const displayPassword = ()=>{
	if (document.querySelector("#length").value<=16 && document.querySelector("#length").value>=6) {
		output.textContent = generatPassword();
	}else{
		output.textContent = "invalid length 6-16 only";
	}
	
}

submitButton.addEventListener("click",displayPassword);
submitButton.addEventListener("click",function(event){event.preventDefault()});

