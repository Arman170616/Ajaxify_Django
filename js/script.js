
document.getElementById("get_data").addEventListener('click', loadData);

function loadData(){
   // console.log("Button clicked!");

   //create XHR Object(Xml Http Request)
   let xhr = new XMLHttpRequest();


   // xhr open
   xhr.open('GET', 'data.txt', true);

   xhr.onload = function(){
       if (this.status === 200){

        document.getElementById('output').innerHTML=`<h4>${this.responseText}</h4>`
       }
   }

   xhr.send();

  // console.log(xhr);
   
}