
function run(){
    var email=document.getElementById("input").value
    var x=email
    email=email.toLowerCase()
    x=x.split("")
    email=email.split("")
    // document.body.append(email)
    var count=0
    var char=0
    var mail=0
    var normal=0
    var code=0
    for(var i=0;i<email.length;i++){
        if(email[i]=="@"){
            char++
        }
        
        
    }
    // console.log(char)
    if(char==1){
        var index=email.indexOf("@")
        var domain=x.splice(index)
        
        domain=domain.join("")
    }
    else{
        alert("invalid")
    }
    
    // console.log(domain)
    if(domain=="@gmail.com" || domain=="@yahoo.com" ||  domain== "@mail.com" || domain=="outlook.com"){
        mail++
    }
    // console.log(mail)
    if(email.length<6 || email[0]=="." || email[length-1] =="." || x[x.length-1]==".")
    {
        count++
    }
    // console.log(count)
    // for(var i=0;i<=x.length;i++){
    //     if(x[i]==)
    // }
    x=x.join("")
    for(var i=0;i<=x.length;i++){
        if(x.charCodeAt(i)<123 && x.charCodeAt(i)>96 || x.charCodeAt(i)>47 && x.charCodeAt(i)<58 || x.charCodeAt(i)==46){
            normal++
        }
        if(x.charCodeAt(i)==46){
            code++
        }
    }
    console.log(normal)
    if(count==0 && char==1 && mail==1 && normal==x.length && (code==1 || code==0)){
        alert("valid")
    }
    else{
        alert("invalid")
    }
    // console.log(x)
    // console.log(domain)
    
}
