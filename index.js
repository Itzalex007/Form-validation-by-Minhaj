
var clearErrors=()=>{

 clear = document.getElementsByClassName("er")
for(let item of clear){
    item.innerText = ""
}
}
function setnameError(id,errorr){
    

element = document.getElementById(id)
document.getElementById("nameError").innerHTML = errorr

}
function setemailError(id,errorr){
    

    element = document.getElementById(id)
    document.getElementById("emailError").innerHTML = errorr
    
    }
    function setphoneError(id,errorr){
    

        element = document.getElementById(id)
        document.getElementById("phoneError").innerHTML = errorr
        
        }
        function setpassError(id,errorr){
    

            element = document.getElementById(id)
            document.getElementById("passError").innerHTML = errorr
            
        }
                        
            function setcpassError(id,errorr){
    

                element = document.getElementById(id)
                document.getElementById("cPasswordError").innerHTML = errorr
                
            }
            
            function formValidation(){
                var returnValue = true
                clearErrors()
    var Name = document.getElementById("fName").value
    // console.log(fName);
    if(Name.length<5 || Name.length == 0 ){
        
        setnameError("fName"," *Length of name is too short , it's length should be greater than 5 !")
        returnValue =false
    }
    var Email = document.forms["myForm"]["fEmail"].value
    if(Email.length<5 || Email.length == 0 ){
        
        setemailError("fEmail"," *Length of email is too short , it's length should be greater than 5 !")
        returnValue =false
    }
    var Phone = document.forms["myForm"]["fPhone"].value
    if(Phone.length != 10 || Phone.length == 0 ){
        
        setphoneError("fPhone"," *Length of Phone is too short or greater than 10 , it's length should be 10 !")
        returnValue =false
    }
    var Pass = document.forms["myForm"]["fPass"].value
    if(Pass.length<4 || Pass.length == 0 ){
        
        setpassError("fPass"," *Length of Password is too short , it's length should be greater than 4 !")
        returnValue =false
    }
    var CPass = document.forms["myForm"]["fCPass"].value
    if(CPass != Pass || CPass.length == 0){
        
        setcpassError("fCPass"," *Confirm password and password is not same ! ")
        returnValue =false
    }
    return returnValue 



}
