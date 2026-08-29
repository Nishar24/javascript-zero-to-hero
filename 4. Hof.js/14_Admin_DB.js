// Ek website par login hone ke baad alag-alag kaam ho sakte hain:

// Dashboard open karna
// Welcome message dikhana

function openDashboard(){
    console.log("Dashboard Open");
    
}

function showWelcome(){
    console.log("Welcome Nishar");
    
}

function  afterLogin(callback){
    callback()
}

afterLogin(showWelcome)
afterLogin(openDashboard)
