'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var config = {username:"if0_39396345",password:"4tOjlR3DNfnec",database:"if0_39396345_atypickal_marketing",host:"sql300.infinityfree.com"}

app.use('/',(req,res)=>{
var request = req.query
var first_name, last_name, project_name, paypal_email, paypal_password, clients_table_name,cookies_table_name, primary_font, secondary_font,title,age_of_business,synonyms, location,vertical_sections, horizontal_sections,description,primary_color,secondary_color;

first_name = request.first_name
primary_color = request.primary_color
secondary_color = request.secondary_color
last_name = request.last_name
project_name = request.project_name
paypal_email = request.paypal_email
paypal_password = request.paypal_password
clients_table_name = request.clients_table_name
cookies_table_name = request.cookies_table_name
primary_font = request.primary_font
secondary_font = request.secondary_font
title = request.title
age_of_business = request.age_of_business
synonyms = request.synonyms
location = request.location
vertical_sections = request.vertical_sections
horizontal_sections = request.horizontal_sections
description = request.description
function sec(ver_num,hor_num){
    var total = ``
        for(let i = 0;i<ver_num;i++){
            let a = ``
            for(let z =0;z<hor_num.length;z++){
                for(let n =0;n<hor_num[z];n++){
                a+=`<div style = "font-family:`+secondary_font+`;display:inline-block">Horizontal Section</div>`
            }}
            total+=`<div><h1 style = "font-family:`+primary_font+`"></h1>`+a+`</div>`
        }
    
            return total

}


res.send(`

<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
@media(max-width:600px){html{font-family:Raleway}#review-slider{display:none}
#post-header-body-div-1{display:none}#messaging-feature{margin:25%}#review-slider{width:100%;height:100%;visibility:visible}#start-review{width:50%;height:inherit;font-size:1em}body{font-family:`+ primary_font +`}#contact-footer-div{visibility:hidden;position:fixed}#image-slider{display:none;background-color:transparent}.circle-select-buttons{display:none}
#main-nav-bar-bottom-half,.main-nav-bar-items-container{display:none}
#search_icon{position:fixed;top:10px;width:25px;right:20px}
.product-images-container{width:100%;display:block}}
@media (max-width:500px){#contact-footer-div{display:none}}
@media(max-width:400px){
.social-media-image-container{width:20px;height:20px}
.home-info{width:100%;display:block}#arrow_1,#arrow_2{width:25px;height:25px}



}

#main-nav-bar-top-half{width:100%;height:20%}
#main-nav-bar-bottom-half{padding-top:35px}
.main-nav-bar-dropdown{
transition:visibility 1s;
  
}

#review_arrow_2{right:5%}

#review_arrow_1{left:5%}

#review_arrow_2,#review_arrow_1{z-index:1;width:50px;height:50px;position:absolute;top:1100px;border-style:none;font-size:3em;color:white;background-color:transparent}
.price,.product-titles{display:none}
a{display:inline-block}
footer{background-color:`+primary_color+`}
#main-header{
width:100%;
height:300px;
background-color:`+primary_color+`;
text-align:center
}
#arrow_1{z-index:1;width:50px;height:50px;left:20px;position:absolute;top:700px;border-style:none;font-size:3em;color:white;background-color:transparent}
#arrow_2{z-index:1;width:50px;height:50px;right:20px;position:absolute;top:700px;border-style:none;font-size:3em;color:white;background-color:transparent}
.product-images-container{
display:inline-block;
font-family:`+ secondary_font +`;
width:49%;
height:500px;
transition:"borderStyle 1s";
  
}

.product-images{
width:100px;
height:100px;
  
}
.main-nav-bar-dropdown-container{
position:absolute;
  
}

#search-bar,.main-nav-bar-items-container{
  display:inline-block;
  font-family:`+ secondary_font +`;
  width:16%;
  background-color:`+primary_color+`;
  
}

.home-info-paragraph{
font-family:`+ secondary_font +`;
color:`+secondary_color+`;
background-color:`+primary_color+`
  
}

.dropdown-button-1, .dropdown-button-2, .dropdown-button-3, .dropdown-button-4,.dropdown-button-5,
.dropdown-button-6{
transition:width .1s, height .1s;
height:0px;
width:0px;
border-style:none;
visibility:hidden;
color:`+primary_color+`;
  display:inline-block;
background-color:`+primary_color+`;
font-size:20px
}
.dropdown-button-7,.dropdown-button-8,.dropdown-button-9,.dropdown-button-10{
transition:width .1s, height .1s;
height:0px;
width:0px;
border-style:none;
visibility:hidden;
    display:inline-block;

color:`+secondary_color+`;
background-color:`+primary_color+`;
font-size:20px

  
}

#post-header-body-div-1{height:500px;color:white;background-color:`+primary_color+`
}
.home-info{
font-family: `+ secondary_font +`;
color:`+secondary_color+`;
background-color: `+primary_color+`;
display:table-cell;
width:32.3%;
height:300px;
text-align:center;
transition:color 1s, background-color 1s
}

#post-header-body-div-3{width:100%;
height:500px;}

.body-div{width:100%}

.main-nav-bar-form-button{    color:`+secondary_color+`;
    background-color: `+primary_color+`;
    font-family: `+ secondary_font +`;
    font-size: 20px;
    font-weight: bold;
    width:24%;
    border-style: none;}

.dropdown-button{
width: inherit;
    height: 0px;
    color: #a1ad20;
    background-color: `+primary_color+`;
    font-family: `+ secondary_font +`;
    font-size: 0px;
    font-weight: bold;
    border-style: none;

}

#home-button.main-nav-bar-form-button{
  font-size:20px;
}


#post-header-body-div-2,#post-header-body-div-1{
text-align:center;
font-family:`+primary_font+`;
}

#main-page-heading{
padding:50px;
font-family:`+primary_font+`;
font-size:40px;
font-weight:bold;
margin:auto;
width:50%;
background-color:inherit;
color:white;
text-align:center;
}

#main-page-heading-container{
background-color:`+primary_color+`
}

footer.span{
display:inline-block
  
}

#footer-half-2,#footer-half-1{
width:49%;
display:inline-block;
background-color:rgb(230, 234, 183);
color:#a1ad20;  
}

.social-media-image{
width:50px;
display:inline-block;
height:50px
  
}
.social-media-image-container::hover{background-color:white}
.social-media-image-container{
display:table-cell;
width:15%  
margin:auto
}

.image-slider-image{
z-index:-1;
width:0px;
animation-name:'shiftImage';
animation-delay:5s;
animation-iteration:infinite  
height:0px;

  
}

#image-slider{
height:350px;
width:100%;
  

}

.contact-div-info{
font-family:Cormorant Garamond;
background-color:rgb(230, 234, 183);
color:#a1ad20;
border-radius:25px;
height:300px;
  text-align:center;


  
}

.contact-div-info-image{
display:inline-block;
width:20%;
border-radius:50%
  
}

.right-content{
display:inline-block;
height:100%;
width:80%;
background-color:rgb(230, 234, 183);
text-align:center;  
}

#1-body-div{
width:21%;
height:100%;
display:inline-block
  
}


#2_dif_forms{
  border-color:rgb(145 151 81);border-style: solid;width:500px;background-color: white;border-width: .3cm;text-align: center;margin:auto
  
}


#message-button{
background-color: rgb(230, 234, 183);
border-style:none;
  color:#a1ad20;
  height:40px;
width:100%
  display:block;
  margin:auto;

  
}

#account-forms{

  
  
}

#messaging-feature{
width:49%;
text-align:center;
display:inline-block;
  font-family:Raleway;
}
#contact-footer-div{
width:49%;
text-align:center;
display:inline-block;
  font-family:Rubik;
  font-weight:300;
  
}


#sender,#message{
height:100px;
width:100%;
  display:block;
  margin:auto;
  box-shadow:1px 1px 10px gray

}
@keyframes shiftImage{
from{visibility:none}
to{visibility:100%}
  
}

  .menu-bar-options{
color: #a1ad20;
    background-color: rgb(230, 234, 183);
    font-family: Cormorant Garamond;
    font-size: inherit;
    width:inherit;
    height:inherit;
    border-style: none;
    display:block
    
  }

#call-to-action::hover{color:black;background-color:white;transition:color .2s, background-color .2s}

.review-container{display:none}

@keyframes slide{
0%{
  #e{height:100%;visibility:visible}
};
25%{
  #e{height:100%;visibility:visible}
};
50%{
#e  {height:100%;visibility:visible}
};
75%{
#e  {height:100%;visibility:visible}
};
100%{
 #e {height:100%;visibility:visible}
};
}
#menu-bar{
  font-size: 0px; position: relative;
  z-index: 1; width: 0px; height: 0px;
  border-right-style: solid; border-right-width: 0.01px;
  display: inline-block; transition: width 0.1s, height 0.1s;
}

.search-option-container{
  height:0px;
width:0px;
border-style:none;
color:#a1ad20;
background-color:#e6eab7;
font-size:20px
}
#precursor{display:none}


.product-image-home-paragraph{text-align:center;font-family:Raleway}

.product-image-heading-2{text-align:center;font-family:Raleway}

.product-image-heading-3{text-align:center;font-family:Raleway}

.buy-button,.select-size,.select-quantity{text-align:center;font-family:Raleway;margin:auto}
.buy-button{border-radius:15px;background-color:white;border-width:.1px;display:block;margin-top:20px}
.select-quantity{width:20px}


.slide-down-div{
background-color:white;opacity:85%;position:absolute;width:0%;transition:width 1s;height:0%;
  
}

.hiring-forms{
  border-style:solid;
  border-color:green;
  border-width:2px;
  height:49%;
  font-family:Raleway;
  width:49%;
  display:table
}

.hiring-form-headers{text-align:center}
circle{fill:white}
#special-offers{
}

.hiring-inputs{border-style: none;
    background-color: transparent;
    border-bottom-style: solid;
    border-bottom-color: white;
    color: white;
    height: 40px;
    width: 400px;
    font-size: 1.2em;}
.hiring-inputs::placeholder{color:white}
.hiring-label{
  text-align:left
}
.main-nav-bar-dropdown-forms{display:inline-block}
#review-slider{
  color:white;
    font-family:Raleway;
  text-align:center;
  margin:auto;
  width:80%;
  display:none;
}


</style>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">

<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<script src="/functions.js" type="text/javascript">

function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
setTimeout(()=>{image.style.opacity = 0%;image.style.opacity = 100%;image.src = i},4000);
};
};



</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="author" content="`+title+`">
<meta name="description" content="`+description+`">
<meta name="generator" content="`+title+`">
<meta property="og:site_name" content="`+title+`">
<meta property="og:url" content="`+req.url+`">
<meta property="og:title" content="`+title+`">
<meta property="og:type" content="website">





<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="">
<meta name="twitter:description" content="">
<title>The Children's Shoppe</title>
</head>

<body><header id="main-header">
<div style="background-color:#e6eab7;height:50%;width:100%">

<svg style="height:50px;width:40px;z-index:1;position:fixed;left:15px;display:inline-block" onmouseover="menuStat('menu-bar')">

<polyline stroke="green" stroke-width="4" points="0 10 40 10"></polyline>
<polyline stroke="green" stroke-width="4" points="0 20 40 20"></polyline>
<polyline stroke="green" stroke-width="4" points="0 30 40 30"></polyline>

</svg>

<div id="menu-bar" onmouseleave="menuStat('menu-bar')">
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">About Us</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Products</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Careers</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Specials</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Create Account/Login</button></a>


</div>
 <img style="height:100px;width:100px" src="/main_logo.jpg">

<nav id="main-nav-bar">
<div id="main-nav-bar-top-half">
<br>

<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';

}


window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
var menu = document.getElementById('menu-bar') 
menu.style.width = "0px";
menu.style.height = "0px";
menu.style.fontSize = "0px"
var specialOffers = document.getElementById('special-offers');specialOffers.style.visibility = hidden;
}
  window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {
"CLOTHES":"/products",
"SHIRTS":"/products",
"PANTS":"/products", 
"TOPS":"/products",
"BOTTOMS":"/products",
"HATS":"/products",
"TOYS":"/products",
"SWEATSHIRTS":"/products",
"HOME":"/home",
"CAREERS AND HIRING":"/hiring",
"PRODUCTS":"/products",
"FURNITURE":"/products"

        }
function searchReq(){
  document.getElementById('options').innerHTML = '';
var val = document.getElementById('search').value;
var list = Object.keys(search_list);

for(let i of list){

if(i.includes(val.toUpperCase())){
    var elem = document.createElement('div');
    var a = document.createElement('a');
    var but = document.createElement('button')
    
    a.className = 'search_op';
    elem.className = 'search_op';
but.style.fontFamily = 'Raleway'
but.style.color = "white";
but.style.borderColor = "rgb(145 151 81)"
but.style.backgroundColor = "rgb(145 151 81)";
but.style.borderRadius = "10px"
but.style.fontWeight = "bold";
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute"
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" 
    a.href = list[i];
	a.append(but)
    but.append(i);

    elem.appendChild(a);
    document.getElementById('options').append(elem);


}



}

}
</script>
<style>
:hover:-moz-placeholder{
    color:rgba(0, 0, 120, 0.8)
    
  } 
  
  :hover::-webkit-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover:-ms-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover::-moz-placeholder{ 
    color:rgba(0, 0, 120, 0.8)}
  
  
  
  
a{
text-decoration:none
}

	#options{position:absolute;z-index:1;width:50%;margin:auto;}
#search{
border-radius:25px;
font-family:Cormorant Garamond;
width:0px;
border-style:solid;
border-color:#a3b8c8;
display:inline-block;
height:50px;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
  
<svg id="search_icon" onclick="

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '350px';
}
else{
width.style.width = '0px'}


" style="z-index:1;width:30px;height:20px;display:inline-block;color:green">
<circle cx="8" cy="8" stroke-width="3" stroke="green" fill="none" r="6"></circle>
<polyline points="12 12 20 20 " stroke-width="3" stroke="green" fill="none"></polyline>
</svg>
<input placeholder="Search for info about The Children's Shoppe" onkeyup="searchReq()" id="search" type="search" style="width: 350px;">

<div style="position:relative"> 
    
<div id="options"></div>
<div id="precursor"></div>
</div><br>
</div>
<br>

<div id="main-nav-bar-bottom-half">


<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-1')">

<form action="/home" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-1')" type="submit" id="contact-button" class="main-nav-bar-form-button">Contact</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown" onmouseenter="dropDown('dropdown-button-1')">
<button type="submit" class="dropdown-button-1">Owner  </button>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">Staff  </button></form>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">Locations  </button></form>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">FAQs  </button></form>

</div>

</div></form>


</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-2')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-2')" type="submit" id="products-button" class="main-nav-bar-form-button">Products</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Tops  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Bottoms  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Toys  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Furniture  </button></form>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-3')">

<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-3')" type="submit" id="contac-button" class="main-nav-bar-form-button">Shirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Brands  </button></form>

</div>

</div>

</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-4')">

<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-4')" type="submit" id="home-button" class="main-nav-bar-form-button">Pants  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Brands  </button></form>


</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-5')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-5')" type="submit" id="home-button" class="main-nav-bar-form-button">Shorts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Brands  </button></form>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-6')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-6')" type="submit" id="home-button" class="main-nav-bar-form-button">Skirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Costs</button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Designs </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Sizes </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Brands </button></form>

</div>

</div>
</span>




</div>



</nav>

</div></header>
<div class="alert-item" id="special-offers" style="z-index:2;opacity:80%;background-color:black;width:80%;height:500px;right:10%;position:fixed;top:30px;margin:auto;color:white;text-align:center;visibility:hidden">
<span style="float:left;font-size:20px;font-family:`+ primary_font +`;font-weight:bold" onclick="document.getElementById('special-offers').style.visibility = 'hidden'">X</span>
<h1 style="font-family:`+ primary_font +`;font-size:3em">Special Offers</h1>
<div class="product-images-container" id="product-images-container-1">
  <img class="product-images">
    <h2>Product Image</h2>
  <input class="product-titles" value="Product Image">
  <br>
<span style="color:red;text-decoration:line-through
    "><p style="font-family:`+ primary_font +`;text-align:center">$100.00</p></span>
    <p>50% OFF</p><input style="display:none;" class="price" value="2">
    <label>Quantity</label><input class="select-quantity" style="
    width: 20px;
">
    <button class="buy-button">Add to Cart</button>
  </div></div>
<div class="alert-item" id="account-forms" style="z-index: 3; opacity: 0.8; background-color: rgb(75, 85, 118); width: 100%; height: 100%; position: fixed; color: white; text-align: center; top: 0px;visibility:visible">
<span style="float:left;font-size:20px;font-family:`+ primary_font +`;font-weight:bold" onclick="document.getElementById('account-forms').style.visibility = 'hidden'">X</span>

<div id="2_dif_forms" style="border-color:rgb(145 151 81);border-style: solid;width:500px;border-width: .3cm; text-align: center;margin:auto"><button onclick="var x = document.getElementById('sgnp'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white';var c =document.getElementById('lgin'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2'); form_1.style.display = 'none';form_2.style.display = 'block'" id="lgin" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; background-color: white; color: rgb(145, 151, 81); font-family: `+ primary_font +`; font-size: large;">Login</button><button onclick="var x = document.getElementById('lgin'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white'; var c =document.getElementById('sgnp'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2');form_2.style.display = 'none';form_1.style.display = 'block'" id="sgnp" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; color: white; background-color: rgb(145, 151, 81); font-family: `+ secondary_font +`; font-size: large;">Sign up</button><form name="form_1" style="font-family:`+ primary_font +`;display: block; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81);" action="/signup" method="post" id="form_1"><br><h1 style="font-family:`+ primary_font +`;font-size: 1cm;text-align: center;">Create Account</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="User" name="User" placeholder="Type your username" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="psw" name="psw" placeholder="Type your password" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="cell" id="cell" placeholder="Type your cell" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_user" id="email_user" placeholder="Type your email" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_psw" id="email_psw" placeholder="Type your password for your email" type="text"><br><button style="border-color:rgb(145 151 81);border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:`+ secondary_font +`;font-size: large;border-style: none;" onclick="formCheck();" id="register" type="submit">Register</button><script>function formCheck(){var user = document.getElementById('User').value;var email,email_psw,cell,psw;psw = document.getElementById('psw').value;email =  document.getElementById('email_user').value;email_psw =  document.getElementById('email_psw').value;cell =  document.getElementById('cell').value;if((email == ""||email=="undefined")||(cell == ""||cell== "undefined")||(email_psw ==""||email_psw== "undefined")||(User == "" || User== "undefined")||(psw == ""||psw == "undefined")){document.getElementById('register').type = 'text';document.getElementById('form_1').action = '/login';alert("Please fill all fields");}}</script></form><form name="form_2" id="form_2" action="/.netlify/functions/login_sub" method="post" style="display: none; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81); font-family: `+ primary_font +`;"><label><h1 style="font-size: 1cm;">Login</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your username" name="login_user" id="lu"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your password" id="pw" name="login_psw"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="cell" placeholder="Type your cell" type="text"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="email_user" placeholder="Type your cell" type="text"></label><br><br><button style="border-color:whitesmoke;border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:`+ secondary_font +`;font-size: large;border-style:none" type="submit">Login</button></form></div>

</div>

<div id="product-selection"></div>
<div id="main-page-heading-container"><h1 id="main-page-heading">`+title+`</h1></div>

<div id = "post-header-div-1">`+sec(vertical_sections,horizontal_sections)+`</div>




<footer style="height:700px;position:relative;background-color:#e6eab7;position:relative;background-color:#e6eab7;">
<div style="width:49%;color:white;background-color:#e6eab7;display:inline-block">
<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')">



<button onmouseover="dropDown('dropdown-button-7')" type="submit" class="main-nav-bar-form-button">Sweaters</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-7" style="height: 0px; width: 0px; visibility: hidden;">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7" style="height: 0px; width: 0px; visibility: hidden;">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7" style="height: 0px; width: 0px; visibility: hidden;">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7" style="height: 0px; width: 0px; visibility: hidden;">Brands  </button></form>

</div>

</div>


</span>


<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8" style="height: 0px; width: 0px; visibility: hidden;">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8" style="height: 0px; width: 0px; visibility: hidden;">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8" style="height: 0px; width: 0px; visibility: hidden;">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8" style="height: 0px; width: 0px; visibility: hidden;">Brands  </button></form>

</div>

</div>
<form action="" method="POST" class="main-nav-bar-form" onmouseover="dropDown('dropdown-button-8')">

<button onmouseover="dropDown('dropdown-button-8')" type="submit" class="main-nav-bar-form-button">Coats</button>




</form></span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Brands  </button></form>

</div>

</div>


<form action="" method="POST" class="main-nav-bar-form" onmouseover="dropDown('dropdown-button-9')">

<button onmouseover="dropDown('dropdown-button-9')" type="submit" class="main-nav-bar-form-button">Suits</button>




</form></span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-10')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-10" style="height: 0px; width: 0px; visibility: hidden;">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9" style="height: 0px; width: 0px; visibility: hidden;">Brands  </button></form>

</div>

</div>


<form action="" method="POST" class="main-nav-bar-form" onmouseover="dropDown('dropdown-button-10')">

<button onmouseover="dropDown('dropdown-button-10')" type="submit" class="main-nav-bar-form-button">Dresses</button>
<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-10')">

</span></form>
</span></div>



<div>
<div style="color:white;background-color:black;font-family:`+ secondary_font +`" id="contact-footer-div">
<h3>`+title+`</h3>
<div id="map"></div>
<p><b>
`+location+`</b></p>
<p><b>(318)-251-9599</b></p>


</div>
<div id="messaging-feature">
<h4 style="text-align:center">Have a Question? Contact Us.</h4>
<form method="POST" id="email" action="/email">
<h4 style="text-align:center">Type your full name in the box below.</h4>
<textarea id="sender" name="sender"></textarea>
<h4 style="text-align:center">Type your message in the box below.</h4>
<textarea id="message" name="message"></textarea>
<button id="message-button" type="submit">Send</button>
</form>

</div>

<p style="display:inline-block;text-align:center;width:100%;font-family:`+ secondary_font +`;color:#a1ad20;background-color:#e6eab7">Hephty Solutions | All Rights Reserved</p>
<div style="color:#a1ad20;background-color:#e6eab7;display:block">
<h4 style="text-align:center;font-size:1em;font-family:`+ primary_font +`">Follow Us!</h4>
<div style="margin: auto;width: 80%;">
<div class="social-media-image-container"><a href=""><img class="social-media-image" width="50" height="50" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new">
</a></div>
<div class="social-media-image-container"><a href=""><img src="/twitter.png" class="social-media-image"></a></div>
<div class="social-media-image-container"><a href=""><img src="https://pluspng.com/img-png/instagram-png-instagram-icon-1600.png" class="social-media-image"></a></div></div>
</div>
</div>
</footer>





</div>
</body></html>
`)
    


    
})

app.use('/.netlify/functions/template',router)
module.exports.handler = serverless(app)
