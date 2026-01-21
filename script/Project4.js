let score = 86 ;
let attendedAllClasses = false ;

if(score >= 90){
    console.log(`You get A`)
}
if(score >= 80 & score <=89){
    console.log(`You get a B`)
}
if(score >= 70 & score <=79){
    console.log(`You get a C`)
}
if(score >= 60 & score <= 69){
    console.log(`You got a D`)
}
if(score <= 59){
    console.log(`You Fail`)
}
if(attendedAllClasses){
    console.log(`You also attended all classes`)
}else{
    console.log(`Do better to attend classes`)
}