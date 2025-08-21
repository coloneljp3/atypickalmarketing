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
#web-builder-wordpress{
height:1500px;
width:100%
}
    
</style>
<script>

function accessPageInfo(id,url,search_query){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
        document.getElementById(id).innerHTML = xml.responseText
        
    } 
    xml.open('GET',url+search_query,true)
    xml.send()
}
    
</script>
<form onsubmit = "" action = "/create-page" method = "POST">
<input placeholder = "Type in the name of the project" name = "project_name"/>
<input placeholder = "Type in the email you want for your paypal account" name = ""/>
<input placeholder = "Type in the password you want for your paypal account"/>
<input placeholder = "Type in the name you want for your database"/>
<input placeholder = "Type in the name you want for your clients table"/>
<input placeholder = "Type in the name you want for your cookies table"/>
<input placeholder = "Type in the primary font you want for your page"/>
<input placeholder = "Type in the secondary font you want for your page"/>
<label for = "Do you want cookies in your website?"><input type = "checkbox"/>
<input placeholder = "What do you want the title for your website to be?"/>
<input placeholder = "How many years has your business existed?"/>
<input placeholder = "Describe your business in synonyms(ex. metalworking, labor, teaching, etc.)..."/>
<input placeholder = "Where is your business located"/>
<input placeholder = "How long has your business been open?"/>
<input placeholder = "How many vertical sections do you want the page to be divided into"/>
<input placeholder = "How many horizontal sections do you want in each vertical section">
<input placeholder = "Do you want email enabled?">
<input placeholder = "Do you want payment enabled?">
</form>
<input placeholder= "Products you want to discuss in each section of the page" type = "search"/>
<input placeholder= "Services you want to discuss in each section of the page" type = "search"/>
<input placeholder= "Hiring you want to discuss in each section of the page" type = "search"/>

<table>
    <tr>
<td class = "table_information"><p>Clients Table</p></td>
<td class = "table_information"><p>Records Table</p></td>
<td class = "table_information"><p>Website Data</p></td>
<td class = "table_information"> <p>Products for the Company</p> </td>
<td class = "table_information"> <p>Website Tracker</p> </td>


        
    </tr>
</table>


<div id = "display_section">
    
</div>`)})

module.exports.handler = serverless(app)
