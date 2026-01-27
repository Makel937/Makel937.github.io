let score = 31 ;
let level = 10 ;
let bonus = true ;

if(bonus){
    score = score + 40
    if(level > 5){
        score = score + 20
    }
}
if(score>=100){
    console.log(`You win`)
}else{
    console.log(`Better luck next time , your score is ${score}`)
}