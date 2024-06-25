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
input_email.addEventListener("keyup",validate_email);


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
input_phone.addEventListener("keyup",validate_phone);

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
    
    /*errors.forEach((error_)=>{
        if(error_.style.display=='none'){
            flag=true;
        }
        else{
            flag=false;
        }
    })*/
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
    input.addEventListener("keyup",enable_submit)
})