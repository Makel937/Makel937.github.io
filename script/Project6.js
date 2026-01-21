let age = 21 ;
let isCitizen = true ;
let hasVotersId = true ;

if(age >= 18){
    if(isCitizen){
        if(hasVotersId){
            console.log(`You can vote`)
        }else{
            console.log(`Get voters id`)
        }
    }else{
        console.log(`Become a citizen`)
    }
}else{
    console.log(`Wait till your 18`)
}