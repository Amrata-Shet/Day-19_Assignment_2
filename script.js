var content=document.getElementById('buttons');
var active;
var prev;

//fetch raw data
function data1(ele){
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true);
request.send();
request.onload = function () {
var data = JSON.parse(this.response);  
content.innerHTML=''
var no;
           
//Current active button
for(var i=1;i<11;i++){
if(document.getElementById(i).classList.contains("active")){
prev=i;
document.getElementById(i).classList.remove("active");
document.getElementById(i).disabled=false;
}
}

//Assign previous and other pagination values to First,Last,Next,Previous and other pagination button's click
if(ele.value=='Previous'){
prev=prev-1;
no=(prev)*10;
document.getElementById(prev).className='active';
}
else if(ele.value=='Next'){
prev=prev+1;
no=(prev)*10;
document.getElementById(prev).className='active';
}
else if(ele.value=='First'){
prev=1;
no=(prev)*10;
document.getElementById(prev).className='active';
}else if(ele.value=='Last'){
prev=10;
no=(prev)*10;
document.getElementById(prev).className='active';
}
else{
no=ele.value*10;
}

ele.classList.toggle("active");

if(ele.classList.contains("active")){
ele.disabled=true;
}
   
//Assign data to all pages in serial                
for(var i=no-10;i<no;i++){
content.innerHTML+=`id:${data[i].id} </br> name: ${data[i].name} </br> email: ${data[i].email} </br>`
}
          
//Next,Previous buttons no data to be assigned.Just button click to navigate for next and previous page              
document.getElementById('11').disabled=false;
document.getElementById('12').disabled=false;
  
}
}
