const price = 765.60 ;
const discount = 55/100 ;
let  isMember = true ;

if(isMember){
    console.log(`Your total is $${price*discount}`)
}else{
    console.log(`Your total is $${price} , for a discount try becoming a member`)
}