//feet to mile converter
function feetToMile(feet){
    if(feet < 0){
        console.log("negative number not allow")
    }else{
        var miles = feet / 5280;
        return miles;
    }
}

// woodCalculator
function woodCalculator(chair,table,khat){
    var totalChairWood = 0;
    var totalTableWood = 0;
    var totalKhatWood = 0;
    var totalWood = 0;
 
    if(chair < 0 || table < 0 || khat < 0){
        console.log("please enter valid value");
    }else{
        totalChairWood = chair * 1;
        totalTableWood = table * 3;
        totalKhatWood = khat * 5;
        totalWood = totalChairWood + totalTableWood + totalKhatWood;
    }
    return totalWood;
}


// brickCalculator 
function brickCalculator(n){
    var totalBrick = 0;
     if(n<0){
         console.log("please enter positive value");
     }else{
         //first 10 flor
         if(n>=10){
            totalBrick += 10*15;
         }else{
            totalBrick += n*15;
         }
        //  second 10 flor
        if(n>10 && n <=20){
            totalBrick+= (n-10) * 12;
        }else if(n>20){
            totalBrick += (20-10) * 12;
        }
        //third stage 
        if(n>20){
            totalBrick += (n-20)*10;
        }
        return totalBrick * 1000;
     }
}




// tinyFriend 
function tinyFriend(friends){
    var min = friends[0];
    for(var i=0 ; i<friends.length ;i++){
        var element = friends[i];
        if(element != ""){
            if(element.length < min.length){
                min = element;
            }
        }
    }
    return min;
}

