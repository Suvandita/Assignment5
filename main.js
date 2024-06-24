function error(x){
    let val=document.querySelector('.'+x+'__input').value;
    if(val=="" ||val==NULL){
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

const input1=document.querySelector(".main__form__message__input");
const input2=document.querySelector(".main__form__name__input");
const input3=document.querySelector(".main__form__1__country__input");
const input4=document.querySelector(".main__form__1__pincode__input");
const input5=document.querySelector(".main__form__2__email__input");
const input6=document.querySelector(".main__form__2__phone__input");



const validate_email=function (){
    let val=input5.value;
    let parent=input5.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.indexOf('@')!=-1 && val.length>1){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid email id";
    }
}
input5.addEventListener("keyup",validate_email);



const validate_phone=function (){
    let val=input6.value;
    let parent=input6.parentElement.className;
    let error_msg=document.querySelector('.'+parent+"> .error");
    if(val.length==10){
        error_msg.style.display="none";
    }
    else{
        error_msg.style.display="block";
        error_msg.innerHTML="Please enter a valid phone number";
    }
}
input6.addEventListener("keyup",validate_phone);
function change_colour(){
    let flag=0;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value==NULL ||inputs[i].value==""){
            flag++;
        }
        
    }
    if(flag==0){
        submit_button=document.querySelector(".main__form__submit");
        submit_button.style.color='blue';
        /*submit_button.addEventListener("hover",function (){
            submit_button.style.cursor='pointer';
        })*/
    
    }
}
/*

function validate(){
    inputs.forEach((input)=>{
        if(input.value==NULL ||input.value==""){
           return false;
        }
    })
    alert("Form is submitted");
    return false;
}
























/*
let count=0;
inputs.forEach((each_input)=>{

    each_input.addEventListener("click",function (count){

        document.querySelectorAll('.error')[count].style.display='block';
        
    })
    each_input.addEventListener("keyup", function (count){
        document.querySelectorAll('.error')[count].style.display='none';
       
    })
    count++;
})*/
/*
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("click",function (){

        document.querySelectorAll('.error')[i].style.display='block';
        
    })
    
}
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("keyup", function (){
        document.querySelectorAll('.error')[i].style.display='none';
       
    })
    
}
*/

/*
function submit(){
    let count=0;
    inputs.forEach((each_input)=>{
        if(each_input.value=="" || each_input.value=NULL){
            count++;
        }
    })
}*/