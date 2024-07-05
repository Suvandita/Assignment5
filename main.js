/*counter for my subject*/
let mytext=document.querySelector(".main__form__message__wrap__input");
let counter=document.querySelector(".counter");
let limit=500;
counter.textContent='30/500';
mytext.addEventListener("input", function(){
    var text_len=mytext.value.length;
    counter.textContent=text_len+'/'+limit;
    if(text_len==500){
        counter.style.color="red";
    }

})

/*empty validations for message field */
function error_msg(x){
    let val=document.querySelectorAll('.'+x+'> .input_class');
    if((val[0].value=="") || (val[1].value=="")){
        document.querySelector('.main__form__message .error').style.display='block';
    }
}
function error_rem_msg(x){
    let val=document.querySelectorAll('.'+x+'> .input_class');
    let val_0=val[0].value.length;
    let val_1=val[1].value.length;
    if((val_0>0) && (val_1>0)){
        document.querySelector('.main__form__message .error').style.display='none';
    }
}

/*empty validations for all fields except message*/
function error(x){
    let val=document.querySelector('.'+x+'__input').value;
    if(val==""){
        document.querySelector('.'+x+'> .error').style.display='block';
    }
}


function error_rem(x){
    let val=document.querySelector('.'+x+'__input').value;
    if(val.length>0){
        document.querySelector('.'+x+'> .error').style.display='none';
    }
}



let inputs=document.querySelectorAll(".input_class");
const input_email=document.querySelector(".main__form__2__email__input");
const input_phone=document.querySelector(".main__form__2__phone__input");


/*email validations*/
const validate_email=function (){
    let val=input_email.value;
    let parent=input_email.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.indexOf('@')!=-1 && val.length>1){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid email id";
    }
}
input_email.addEventListener("change",validate_email);


/*phone validations*/
const validate_phone=function (){
    let val=input_phone.value;
    let parent=input_phone.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.length==10){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid phone number";
    }
}
input_phone.addEventListener("change",validate_phone);

/*submit button enable/disable */

let errors=document.querySelectorAll('.error');
function enable_submit(){
    let flag=false;
    for(let i=0;i<errors.length;i++){
        if(errors[i].style.display=='none'){
            flag=true;
            
        }
        else{
            flag=false;
            return false;
        }
    }
    
   /*
   errors.forEach((error_)=>{
        if(error_.style.display=='none'){
            flag=true;
        }
        else{
            flag=false;
        }
    }) */
    if(flag==true){
        inputs.forEach((input)=>{
            if(input.value.length>0){
                flag=true;
            }
            else{
                flag==false;
                return false;
            }
        })
    }
    /*
    if(flag==true){
        for(let j=0;j<inputs.length;j++){
            if(inputs[j].value.length>0){
                flag=true;
            }
            else{
                flag=false;}}}*/

    if(flag==true){
        submit_button=document.querySelector(".main__form__submit");
        submit_button.style.color='blue';
        submit_button.style.borderColor='blue';
        submit_button.disabled=false;
        submit_button.addEventListener("mouseover", function (){
            submit_button.style.cursor='pointer';
        })
        
      
    }
}
inputs.forEach((input)=>{
    input.addEventListener("change",enable_submit)
})
//Previous HTML


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>Assignment 5</title>
</head>
<body>
    <div class="main">
        <h1 class="main__heading">Write to us</h1>
        <form onsubmit="validate()" class="main__form">
            <div class="main__form__message">
                <label for="message" class="main__form__message__label">Your message</label>


                <div class="main__form__message__wrap" id="message">
                    <input type="text" class="main__form__message__wrap__subject input_class" placeholder="Request for interview" maxlength="75" onclick="error_msg('main__form__message__wrap')" onkeyup="error_rem_msg('main__form__message__wrap')">
                    <hr>
                    <textarea class="main__form__message__wrap__input input_class" required maxlength="500" onclick="error_msg('main__form__message__wrap')" onkeyup="error_rem_msg('main__form__message__wrap')">Hello, 
I am Suvandita Swaroop</textarea>     
                        <p class="counter"></p>
                </div>
                <div class="error">Subject and Message field cannot be empty</div> 
                
            </div>
            <div class="main__form__name">
                <label for="name" class="main__form__name__label">Name</label>
                <input id="name" class="main__form__name__input input_class" type="text" required placeholder="Full Name" onclick="error('main__form__name')" onkeyup="error_rem('main__form__name')">
                <div class="error">This field cannot be empty</div>            
            </div>
            <div class="main__form__1">
                <div class="main__form__1__country">
                    <label for="country" class="main__form__1__country__label">Country</label>
                    <select id="country" class="main__form__1__country__input input_class" required onclick="error('main__form__1__country')" onchange="error_rem('main__form__1__country')">
                        <option value="" selected>Select option</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="korea">Korea</option>
                    </select>
                    <div class="error">This field cannot be empty</div>                
                </div>
                <div class="main__form__1__pincode">
                    <label for="pincode" class="main__form__1__pincode__label">Pincode</label>
                    <input id="pincode" class="main__form__1__pincode__input input_class" type="number" required placeholder="Enter pincode" onclick="error('main__form__1__pincode')" onkeyup="error_rem('main__form__1__pincode')">
                    <div class="error">This field cannot be empty</div>
                </div>

            </div>
            <div class="main__form__2">
                <div class="main__form__2__email">
                    <label for="email" class="main__form__2__email__label">Email</label>
                    <input id="email" class="main__form__2__email__input input_class" type="email" required placeholder="Enter email" onclick="error('main__form__2__email')" onkeyup="error_rem('main__form__2__email')">
                    <div class="error">This field cannot be empty</div>
                </div>
                <div class="main__form__2__phone">
                    <label for="phone" class="main__form__2__phone__label">Phone Number</label>
                    <input id="phone" class="main__form__2__phone__input input_class" type="tel" pattern="[0-9]{10}" required placeholder="Enter phone number" onclick="error('main__form__2__phone')" onkeyup="error_rem('main__form__2__phone')">
                    <div class="error">This field cannot be empty</div>
                </div>

            </div>
            
            <input type="submit" value="Submit" class="main__form__submit" disabled>
        </form>
    </div>
    <script src="main.js"></script>
    
</body>
</html>
 */

//Previous JS
/*
//counter for my subject
let mytext=document.querySelector(".main__form__message__wrap__input");
let counter=document.querySelector(".counter");
let limit=500;
counter.textContent='30/500';
mytext.addEventListener("input", function(){
    var text_len=mytext.value.length;
    counter.textContent=text_len+'/'+limit;
    if(text_len==500){
        counter.style.color="red";
    }

})

//empty validations for message field
function error_msg(x){
    let val=document.querySelectorAll('.'+x+'> .input_class');
    if((val[0].value=="") || (val[1].value=="")){
        document.querySelector('.main__form__message .error').style.display='block';
    }
}
function error_rem_msg(x){
    let val=document.querySelectorAll('.'+x+'> .input_class');
    let val_0=val[0].value.length;
    let val_1=val[1].value.length;
    if((val_0>0) && (val_1>0)){
        document.querySelector('.main__form__message .error').style.display='none';
    }
}

//empty validations for all fields except message
function error(x){
    let val=document.querySelector('.'+x+'__input').value;
    if(val==""){
        document.querySelector('.'+x+'> .error').style.display='block';
    }
}


function error_rem(x){
    let val=document.querySelector('.'+x+'__input').value;
    if(val.length>0){
        document.querySelector('.'+x+'> .error').style.display='none';
    }
}



let inputs=document.querySelectorAll(".input_class");
const input_email=document.querySelector(".main__form__2__email__input");
const input_phone=document.querySelector(".main__form__2__phone__input");


//email validations
const validate_email=function (){
    let val=input_email.value;
    let parent=input_email.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.indexOf('@')!=-1 && val.length>1){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid email id";
    }
}
input_email.addEventListener("keyup",validate_email);


//phone validations
const validate_phone=function (){
    let val=input_phone.value;
    let parent=input_phone.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.length==10){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid phone number";
    }
}
input_phone.addEventListener("keyup",validate_phone);

//submit button enable/disable 

let errors=document.querySelectorAll('.error');
function enable_submit(){
    let flag=false;
    for(let i=0;i<errors.length;i++){
        if(errors[i].style.display=='none'){
            flag=true;
            
        }
        else{
            flag=false;
            return false;
        }
    }
    if(flag==true){
        inputs.forEach((input)=>{
            if(input.value.length>0){
                flag=true;
            }
            else{
                flag==false;
                return false;
            }
        })
    }
    
    if(flag==true){
        submit_button=document.querySelector(".main__form__submit");
        submit_button.style.color='blue';
        submit_button.style.borderColor='blue';
        submit_button.disabled=false;
        submit_button.addEventListener("mouseover", function (){
            submit_button.style.cursor='pointer';
        })
        
      
    }
}
inputs.forEach((input)=>{
    input.addEventListener("keyup",enable_submit)
})
 */
