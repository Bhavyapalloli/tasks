let inputbox=document.getElementById('inputbox')
let buttons=document.querySelectorAll('button')
 
let string=''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText =='='){
            string = string(eval(string))
            inputbox.value =string;
        }
        else if (b.target.innerText == 'AC'){
            string=''
            inputBox.value =string;
        }
        else if(b.target.innerText =='DEL'){
            string= string.substring(0,strinf.length-1)
            inputBox.value=string;

        }
        else if(b.target.id=='plusMinus'){
            string = string(-eval(string))
            inputBox.value=string;
        }
        else{
            string +=b.target.innerText
            inputBox.value=string
        }
    })
})