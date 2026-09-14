function createUser(name){
   
    function getName(){
    return name
   }

   function changeName(newName){
      name = newName
      
   }

   return{
    getName,
    changeName
   }
}

let user = createUser("Nishar")
console.log(user.getName());
user.changeName("Manzar")
console.log(user.getName());

console.log(user.name);


