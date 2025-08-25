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
res.send(`<style>
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
<div id="pseudo_form_records">
<input id="key_username_records" name="username" placeholder="Type in the username you want">
<input id="key_product_records" name="product" placeholder="Tpye in the product you want">
<input id="key_date_records" name="date" placeholder="Type in the date you want">
<button class="updateButton" onclick="updateRecords('records_table','add')">Add</button>
</div><h1 class="table_heading">Products</h1>
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
<div id="pseudo_form_products">
<input id="key_url_products" name="url" placeholder="Type in the url you want">
<input id="key_price_products" name="price" placeholder="Type in the price you want">
<input id="key_name_products" name="name" placeholder="Type in the name you want">
<input id="key_inventory_products" name="inventory" placeholder="Type in the inventory you want(number)">
<button onclick="updateProducts('products_table','add')" class="updateButton">Add</button>
</div><h1 class="table_heading">Records</h1>
<table id="records_table" class="table">
<tbody><tr class="table_row">
<td class="table_data">Username</td>
<td class="table_data">Product</td>
<td class="table_data">Date</td>

</tr>
</tbody></table>
</div>
</body>`)})

app.use('/.netlify/functions/results',router)
module.exports.handler = serverless(app)
