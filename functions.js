function menuStat(id){
var menu = document.getElementById(id);
if(menu.style.width == '0px'){
menu.style.width = '100%';
menu.style.height = '60px'
menu.style.fontSize = '20px'}
else{
menu.style.width = '0px';
menu.style.height = '0px';
menu.style.fontSize = '0px';}
};

 

function circleSelect(ind,urlList,id){
if(this.fill == 'black'){this.fill = 'none'}
else{
  this.fill = 'black';
  document.getElementById(id).src = urlList[ind]
}
}

function colorChange(id, color_1, color_2){
var element = document.getElementById(id);

  if(element.style.color == color_1){

    element.style.color = color_2;
  }
  else{
element.style.color = color_1;
    
  }
};

function propChange(element,property,value){
element.style.property = value;
}

function backColorChange(element, color_1){
  var element = document.getElementById(id);
   if(element.style.backgroundColor == color_1){

    element.style.backgroundColor = color_2;
  }
  else{
element.style.backgroundColor = color_1;
    
  }

};



function fadeIn(id,transition){
var element = document.getElementById(id);
element.style.transition = "visibility "+ transition;
  if(element.style.visiblity == "hidden")
  {element.style.visibility = "visible"}

  
};

function borderBottomAppear(id, color_1, color_2){
  var elem = document.getElementById(id);
if(elem.style.borderBottomColor == color_1){
elem.style.borderBottomColor = color_2;}else{elem.style.borderBottomColor = color_1;}}

function dropDown(classname){
var dropDown = document.getElementsByClassName(classname);
for(let i of dropDown){
 
i.style.height = '100%';
i.style.width = '100%';
i.style.visibility = "visible";
i.addEventListener('mouseover',(event)=>{
this.style.borderBottomStyle = 'solid';
this.style.borderColor = 'white'
  
});
i.addEventListener('mouseleave',(event)=>{
this.style.borderBottomStyle = 'none';

});
  }
}

function revDropDown(classname){
var dropDown = document.getElementsByClassName(classname);
for(let i of dropDown){
 
i.style.height = '0px';
i.style.width = '0px';
i.style.visibility = "hidden";
  }
}







function shiftImage(urlList,id,id_2){

var elem = document.getElementById(id);
var elem_2 = document.getElementById(id_2);
var ind = urlList.indexOf(elem.src);
if(id_2 == 'arrow_1'){
if(ind == 0){
   ind+=urlList.length - 1
   document.getElementById(id).src = urlList[ind]}
else{
   document.getElementById(id).src = urlList[ind-1]}

 
}

 

else{
if(ind+1 == urlList.length){
 ind = 0
document.getElementById(id).src = urlList[ind]}

else{
document.getElementById(id).src = urlList[ind+1]}

  

}} 

  function xmlMailSend(){
var sender = document.getElementById('sender');
var message = document.getElementById('message');
let xml = new XMLHttpRequest();
xml.onreadystatechange = ()=>{
var f = document.querySelector('#email');
var frm = new FormData(f); 
xml.open('POST','/submit.js','True')
xml.send();
  
}


    }

function searchQuery(classname,property,value){
var list = document.getElementsByClassName(classname)
for(let i of list){
if(i.property == value){

  i.style.display = block
  
}
  else{
i.style.display = none
    
  }
}
  
}

function sort(classname, quality){
var classes = document.getElementsByClassName(classname)
for(let i of classes){
if(i.quality){
i.style.display = "inline-block";
  
}
  else{
i.style.display = "none"
    
  }
  
}
  
}

function range(b,e){
  z=[]
while(b<e){
z.push(b)
b+=1
  
}
return z


}


function productReq(){
var xml = new XMLHttpRequest();
var z;
  xml.onreadystatechange =()=>{
    z = xml.responseText;
  document.getElementById("product-selection").innerHTML = xml.responseText;
} 
xml.open('GET','/products.xml','true');

xml.send();
};



function priceSort(){
productReq();
var prices = document.getElementsByClassName('price');
var images = document.getElementsByClassName('product-images');
var titles = document.getElementsByClassName('product-titles');
var z;
var classes_2 = document.getElementById('product-selection');
var classe = []
for(let i of range(0,prices.length)){
  classe.push([prices[i].value,images[i].src,titles[i].value])
};
    
for(let i of range(0,classe.length)){
  var min_index = i;
    for(let a of range(i+1,classe.length)){
          if(classe[a][0] < classe[min_index][0]){
          min_index = a;

          };
      z = a;
      
    };
let c = classe[min_index][0]
let v = classe[i][0]
classe[min_index][0] = v;
classe[i][0] = c;
}
for(let i of classe){
let div = document.createElement('div')
let price = document.createElement('input')
let h2 = document.createElement('h2')
let img = document.createElement('img')
let p = document.createElement('p')
div.className = "product-images-container";
img.className = "product-images"
img.src = i[1]
price.value = i[0]
p.innerHTML = i[0]
h2.innerHTML = i[2]
div.appendChild(h2)
div.appendChild(img)
div.appendChild(input)
div.appendChild(price)
console.log(h2,price,img,div)
document.getElementById('product-selection').appendChild(div)
  
  
}
}




function searchList(req_word){
  document.getElementById('options').innerHTML = ''
  var xml = new XMLHttpRequest();
 xml.onreadystatechange =()=>{
   var div = document.createElement('div');
for(let i of xml.responseText){
let ide = i.id;
    if(ide.includes(req_word.toUpperCase())){

  div.appendChild(i)
}

  
}
   document.getElementById('product-selection').appendChild(div);
}
xml.open('GET','/search_options.xml','true');

xml.send();
}

//function slideDown(){
 // if(this.style.width == 0%){
//this.style.width = 100%;
//this.style.height = 100%}
 // else{
//this.style.width = 0%;
//this.style.height = 0%
    
  //}
  
//}

function mediaQuery(width,identifier,styles){
if(window.innerWith <= width){
if(document.getElementById(identifier) == 'undefined'){
var classes = document.getElementsByClassName(identifier);
for(let i of classes){
i.style.push(styles)
  
}
  
}
  else{
var id = document.getElementById(identifier);
    id.style.push(styles)
    
  }
}
  
}

function addCart(id){
document.getElementsById()
var cart = document.getElementById(id);
var cartItem = document.createElement('div');
cartItem.style.display = "none";
}


function insertReview(id,data){

var heading = document.getElementById('review-heading')
var review = document.getElementById('review-paragraph')
var rating = document.getElementById('review-rating')
var i = data.Heading.indexOf(heading.innerHTML)
if(id == 'review_arrow_1'){
 if(i == 0){
 i = heading.length
 heading.innerHTML = data.Heading[i]
review.innerHTML = data.Review[i]
rating.innerHTML = data.Rating[i]
  
 }
 else{
 heading.innerHTML = data.Heading[i-1]
review.innerHTML = data.Review[i-1]
rating.innerHTML = data.Rating[i-1]}
}
else{
if(i+1 == heading.length){
 heading.innerHTML = data.Heading[0]
review.innerHTML = data.Review[0]
rating.innerHTML = data.Rating[0]
  
 }
 else{
 heading.innerHTML = data.Heading[i+1]
review.innerHTML = data.Review[i+1]
rating.innerHTML = data.Rating[i+1]
  
 }
 
}    
    
}
 
