function error(x){
   document.querySelector('.'+x+'> .error').style.display='block';
    
}
function error_rem(x){
    document.querySelector('.'+x+'> .error').style.display='none';
}


/*
let inputs=document.querySelectorAll(".input_class");
const input1=document.querySelector(".main__form__message__input");
const input2=document.querySelector(".main__form__name__input");
const input3=document.querySelector(".main__form__1__country__input");
const input4=document.querySelector(".main__form__1__pincode__input input_class");
*/












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