let height = 2.14;
let weight = 94.3 ;
let bmi = weight / height **2 ;

if( bmi < 18.5){
    console.log(`You are underweight`)
}
if( bmi >18.5 & bmi <24.9){
    console.log(`You are of moderate weight`)
}
if( bmi > 24.9){
    console.log(`You are overweight`)
}