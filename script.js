const text =  document.getElementById('text');

document.getElementById('btn-bold').addEventListener('click', function(){
   
    text.style.fontWeight = '900'
})

document.getElementById('italic').addEventListener('click', function(){
   
     text.style.fontStyle = "italic";
 })

 document.getElementById('underline').addEventListener('click', function(){
   
     text.style.textDecoration = "underline";
 })
 document.getElementById('left').addEventListener('click', function(){
    text.style.textAlign= "left";
})


 document.getElementById('center').addEventListener('click', function(){
       text.style.textAlign= "center";
 })
 document.getElementById('right').addEventListener('click', function(){
       text.style.textAlign= "right";
 })
    

 document.getElementById('input-color').onchange = function(){
           text.style.color = this.value;
 }
 
 document.getElementById('number-field').onclick = function(){
           const numberValue  = this.value;
            const numberInPx = numberValue + 'px'
           text.style.fontSize = numberInPx ;
          
 }


 
 




