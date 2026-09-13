function multiplyBy(number){
   

    function operation(value){
        return value * number  
    }
    return operation
}

let double = multiplyBy(2)
console.log(double(10));
