 const searchFunction=()=>{
     var filter=document.getElementById("myInput").value.toUpperCase();
     var myTable=document.getElementById("myTable") ;

     var tr=myTable.getElementsByTagName('tr');

     for(var i=0; i<tr.length; i++){
         let td=tr[i].getElementsByTagName('td')[0];   //[0] means only name field 
        

         if(td){
             let textValue=td.textContent || td.innerHTML;


             if(textValue.toUpperCase().indexOf(filter)>-1){
                 tr[i].style.display="";

             }else{
                 tr[i].style.display="none";
             }
         }
     }
     

 }
document.body.classList.add('b1')
var a1=document.createElement('div');


a1.classList.add('a2','a1');
a1.innerHTML="My List";
document.body.appendChild(a1);


var btn=document.createElement('button');
var d2=document.createElement('div');

btn.style.fontWeight='bold';

d2.style.fontWeight='bold';
d2.style.backgroundColor='transparent';


btn.innerHTML='display time';


document.body.appendChild(btn);
document.body.appendChild(d2);

btn.addEventListener('click',fun1);
function fun1(){
    
    d2.innerHTML= Date();
}


btn.classList.add('btn')
