//DONE
//https://www.reddit.com/r/dailyprogrammer/comments/3qjnil/20151028_challenge_238_intermediate_fallout/
var leArray = [
    "scorpion",
    "flogging",
    "croppers",
    "migraine",
    "footnote",
    "refinery",
    "vaulting",
    "vicarage",
    "protract",
    "descents"]

function printArray(){
    for(var i = 0; i< leArray.length; i++){
        console.log(leArray[i]);
    }
}

function chooseTheRandomWord(){
    return leArray[Math.floor(Math.random()*leArray.length)];
}

function checkIfItsInArray(guessedWord,wordYouShouldGuesss){
    var word = guessedWord;
    var wordYouShouldGuess = wordYouShouldGuesss;
    
    //igennem
    var counter=0;
    if(word==wordYouShouldGuess){
        console.log("You guessed it");
        counter= false;
        
    }else{
        console.log("igennem kører")
    for(var i = 0; i<8; i++){
        if(word[i]==wordYouShouldGuess[i]){
            counter++;

        }
    }
}
return counter;

}


function hackthis(){
    console.log("hello world!");
    printArray();
    var guessedIt = false;
    var triesLeft = 4;

    var randomWordYoureGUessing = chooseTheRandomWord();
    console.log(randomWordYoureGUessing);

    while (guessedIt == false && triesLeft> 0){ 
    
    
    var yourGuess = prompt("Guess here "+ triesLeft + " tries left.");
    console.log(yourGuess);
    if(checkIfItsInArray(yourGuess, randomWordYoureGUessing)!=false){
    console.log(checkIfItsInArray(yourGuess, randomWordYoureGUessing)+" You guessed that many correct.");
    }
    if(checkIfItsInArray(yourGuess, randomWordYoureGUessing)==false){
        guessedIt=true;
        alert("You won!")
    }
    triesLeft--; 
}
}