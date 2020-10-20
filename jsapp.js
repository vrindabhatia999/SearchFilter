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