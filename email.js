
function run(){
    var email=document.getElementById("input").value
    var x=email
    x=x.split("")
    email=email.split("")
    // document.body.append(email)
    var count=0
    var char=0
    var mail=0
    var normal=0
    
    for(var i=0;i<email.length;i++){
        if(email[i]=="@"){
            char++
        }
        
        
    }
    // console.log(char)
    if(char==1){
        var index=email.indexOf("@")
        var domain=x.splice(index)
        x=x.join("")
        domain=domain.join("")
    }
    else{
        alert("invalid")
    }
    
    // console.log(domain)
    if(domain=="@gmail.com" || domain=="@yahoo.com" ||  domain== "@mail.com"){
        mail++
    }
    // console.log(mail)
    if(email.length<6 || email[0]=="." || email[length-1] ==".")
    {
        count++
    }
    for(var i=0;i<=x.length;i++){
        if(x.charCodeAt(i)<122 && x.charCodeAt(i)>96 || x.charCodeAt(i)>48 && x.charCodeAt(i)<57){
            normal++
        }
    }
    console.log(normal)
    if(count==0 && char==1 && mail==1 && normal==x.length){
        alert("valid")
    }
    else{
        alert("invalid")
    }
    
}