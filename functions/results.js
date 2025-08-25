'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/',(req,res)=>{
var request = req.body
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
res.send(`<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><style>
#key_product_records,#key_password_accounts,#key_inventory_products,#key_name_records,#key_username_records,#key_date_records,#key_username_accounts,#key_pasword_accounts,#key_name_products,#key_price_products,#key_url_products,#key_inventory_products::placeholder{font-family:Raleway;
                                                                                                                                          }


#key_product_records,#key_password_accounts,#key_inventory_products,#key_name_records,#key_username_records,#key_date_records,#key_username_accounts,#key_pasword_accounts,#key_name_products,#key_price_products,#key_url_products,#key_inventory_products{width:300px;height:50px}
#pseudo_form_accounts,#pseudo_form_records,#pseudo_form_products{border-bottom-style:none;border-bottom-width:1px;border-bottom-style:solid;border-color:whitesmoke;font-family:Verdana}
.table_container{
border-style:solid;margin:15px;border-width:.5px
}
.table_heading{font-family:Raleway;color:green}.table_data{font-family:Raleway;border-style:solid;border-width:.2px}

.table{
    border-style:solid;border-width:.3px;
}
   .updateButton{display:block;background-color:transparent;font-family:helvetica;border-style:solid;border-width:.5px;width:100px;height:30px} 
</style><script>
function updateAccounts(id,action){
var x = document.createElement('button')
x.innerHTML = "X"
x.addEventListener('click',(event)=>{event.target.parentNode.parentNode.removeChild(event.target.parentNode)}) 
var key_username = document.getElementById('key_username_accounts').value
var key_password = document.getElementById('key_password_accounts').value
var info = {"username":key_username,"pasword":key_password}

var elem = document.getElementById(id)
if(action=="delete"){
elem.parentNode.removeChild(elem)
}
if(action == "add"){
var username = info["username"]
var pasword = info["pasword"]

var row = document.createElement('tr')
var pas = document.createElement('td')
var use = document.createElement('td')

pas.innerHTML = pasword
use.innerHTML = username

row.appendChild(use)
row.appendChild(pas)
row.appendChild(x)

elem.appendChild(row)
}
}


function updateProducts(id,action){
var x = document.createElement('button')
x.innerHTML = "X"
x.addEventListener('click',(event)=>{event.target.parentNode.parentNode.removeChild(event.target.parentNode)}) 
var key_name = document.getElementById('key_name_products').value
var key_url = document.getElementById('key_url_products').value
var key_price = document.getElementById('key_price_products').value
var key_inventory = document.getElementById('key_inventory_products').value

var info = {"name":key_name,"url":key_url,"price":key_price,"inventory":key_inventory}

var elem = document.getElementById(id)
if(action=="delete"){
elem.parentNode.removeChild(elem)
}
if(action == "add"){
var inventory = info["inventory"]
var url = info["url"]
var price = info["price"]
var name = info["name"]


var row = document.createElement('tr')
var nam = document.createElement('td')
var ur = document.createElement('td')
var pr = document.createElement('td')
var inv = document.createElement('td')
nam.class = "table_data"
ur.class="table_data"
pr.class="table_data"
inv.class="table_data"

nam.innerHTML = name
ur.innerHTML = url
pr.innerHTML = price
inv.innerHTML = inventory



row.appendChild(nam)
row.appendChild(ur)
row.appendChild(pr)
row.appendChild(inv)
row.appendChild(x)

elem.appendChild(row)
}

}
function updateRecords(id, action){
var x = document.createElement('button')
x.innerHTML = "X"
x.addEventListener('click',(event)=>{event.target.parentNode.parentNode.removeChild(event.target.parentNode)}) 
var key_username = document.getElementById('key_username_records').value
var key_product = document.getElementById('key_product_records').value
var key_date = document.getElementById('key_date_records').value

var info = {"username":key_username,"product":key_product,"date":key_date}



var elem = document.getElementById(id)
if(action=="delete"){
elem.parentNode.removeChild(elem)
}
if(action == "add"){
var date = info["date"]
var username = info["username"]
var product = info["product"]


var row = document.createElement('tr')

var use = document.createElement('td')
var prod = document.createElement('td')
var dat = document.createElement('td')

use.innerHTML = username
dat.innerHTML = date
prod.innerHTML = product

row.appendChild(use)
row.appendChild(prod)
row.appendChild(dat)
row.appendChild(x)
elem.appendChild(row)
}

}

</script><body>








<div class="table_container">
<div id="pseudo_form_accounts">
<input name="username" id="key_username_accounts" placeholder="Type in the username you want">
<input name="pasword" id="key_password_accounts" placeholder="Type in the password you want">
<button onclick="updateAccounts('accounts_table','add')" class="updateButton">Add</button>
</div><h1 class="table_heading">Accounts</h1>
<table id="accounts_table" class="table">
<tbody><tr class="table_row">
<td class="table_data">Username</td>
<td class="table_data">Password</td>
</tr>
</tbody></table></div>

<div class="table_container">
<div id="pseudo_form_products">
<input id="key_url_products" name="url" placeholder="Type in the url you want">
<input id="key_price_products" name="price" placeholder="Type in the price you want">
<input id="key_name_products" name="name" placeholder="Type in the name you want">
<input id="key_inventory_products" name="inventory" placeholder="Type in the inventory you want(number)">
<button onclick="updateProducts('products_table','add')" class="updateButton">Add</button>
</div>
<h1 class="table_heading">Products</h1>
<table id="products_table" class="table">
<tbody><tr class="table_row">
<td class="table_data">Name</td>
<td class="table_data">Url</td>
<td class="table_data">Price</td>
<td class="table_data">Inventory</td>


</tr>
</tbody></table>
</div>

<div class="table_container">
<div id="pseudo_form_records">
<input id="key_username_records" name="username" placeholder="Type in the username you want">
<input id="key_product_records" name="product" placeholder="Tpye in the product you want">
<input id="key_date_records" name="date" placeholder="Type in the date you want">
<button class="updateButton" onclick="updateRecords('records_table','add')">Add</button>
</div>
<h1 class="table_heading">Records</h1>
<table id="records_table" class="table">
<tbody><tr class="table_row">
<td class="table_data">Username</td>
<td class="table_data">Product</td>
<td class="table_data">Date</td>

</tr>
</tbody></table>
</div>
<div>
<h1 style = "font-family:Raleway">Eccommerce Template Page</h1>
<iframe style="height:800px;width:100%" src = "https://childrensshoppe.netlify.app/products"></iframe>

</div>
<div>
<h1 style = "font-family:Raleway">Template Page</h1>
<iframe style="height:800px;width:100%" src = "/.netlify/functions/template?first_name=`+first_name+`&primary_color=`+primary_color+`&secondary_color=`+secondary_color+`&last_name=`+last_name+`&project_name=`+project_name+`&paypal_email=`+paypal_email+`&paypal_password=`+paypal_password+`&clients_table_name=`+clients_table_name+`&cookies_table_name=`+cookies_table_name+`&primary_font=`+primary_font+`&secondary_font=`+secondary_font+`&title=`+title+`&age_of_business=`+age_of_business+`&synonyms=`+synonyms+`&location=`+location+`&vertical_sections=`+vertical_sections+`&horizontal_sections=`+horizontal_sections+`&description=`+description+`">
</iframe>
</div>



</body>`)})

app.use('/.netlify/functions/results',router)
module.exports.handler = serverless(app)
