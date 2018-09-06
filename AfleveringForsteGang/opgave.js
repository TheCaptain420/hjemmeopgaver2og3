function opgave1(){
    var tsm = ["#","##","###","####","#####","######","#######"]
    //hacks
    for(var i = 0; i<7; i++){
        console.log(tsm[i]);
    }
}

function opgave2(){
    var i;
    for(var i = 1; i<=100; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }

    }

}

function opgave3(){
    var finishProduct = " ";

    for(var i = 1; i<9; i++){
        for(var p = 1; p<9; p++){
            if(p%2==0){
                finishProduct+=" ";
            }else{
                finishProduct+="#";
            }
        }
        finishProduct+="\n";
        if(i%2==0){
            finishProduct+=" ";
        }else{
            console.log();
        }
    }
console.log(finishProduct);
}

//skriver tallene her(i para), da jeg ikke gider lave textfields i html

function opgave4(ab,ba){
    ab = -10;
     ba = 8;
    if(ab<ba){
        console.log(ab);
    }else{
        console.log(ba);
    }
}

//kør den her i console == opgave5(tallet etc. 75)
function opgave5(tal){
    if(tal<0){
        //gør tallet positivt.
        return opgave5(-tal);
    }else if(tal==1){
        //One is odd
        return false;
    }else if(tal==0){
        //Zero is even
        return true;
    } else{
        //For any other number N, its evenness is the same as N - 2.
        return opgave5(tal-2);
    }
}

//kør i console == opgave6("Din text","bogstavet etc. a")
function opgave6(ord,bogstav){
    var counter = 0;
    
    console.log("counting: "+ bogstav)
    for(var ta = 0; ta < ord.length; ta++){
        console.log(ord[ta]);
        
        if(ord[ta]==bogstav){
            counter++;
        }
    }
    console.log("we done ="+counter);

}