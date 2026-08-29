function emailNotification(){
    console.log("Message sent successfully");
    
}

function textNotification(){
    console.log("Text message sent successfully");
    
}

function msgType(type){
    if(type === "Email"){
        return emailNotification
    }

    if(type === "Text"){
        return textNotification
    }
}

let msg = msgType("Text")
msg()