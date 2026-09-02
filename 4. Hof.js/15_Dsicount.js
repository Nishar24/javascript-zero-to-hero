

function regularDiscount(amount){
    let result = Math.floor(amount-(amount * 10/100))
    return result
  
}

function premiumDiscount(amount){
    
    let result = Math.floor(amount-(amount * 20/100))
    return result

  
}


function vipDiscount(amount){
    let result = Math.floor(amount-(amount * 30/100))
    return result
  
}


function getDiscount(customerType){
   if(customerType === "premium"){
    return premiumDiscount
   }

   if(customerType === "regular"){
    return regularDiscount
   }

   if(customerType === "vip"){
    return vipDiscount
   }
}

let discount = getDiscount("regular")
console.log(discount(5000));
