'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var config = {username:"if0_39396345 ",password:"4tOjlR3DNfnec",database:"if0_39396345_atypickal_marketing",host:"sql300.infinityfree.com"}
app.use('/',(req,res)=>{
var user = req.body.username
var psw = req.body.psw
var conn = mysql.createConnection(config)
conn.query(`INSERT INTO Accounts(username,psw) VALUES(?,?)`,[user,psw],(err,results,fields) => {var result= results[0]["count(*)"]; if(result == 0){
    res.send(`<link href = "/styles.css" rel = "stylesheet"/>
<input style = "display:none" name = "username" value = `+user+`/>
<input  style = "display:none" name = "psw" value = `+psw+`/>
<style>

#web-builder-wordpress{
height:1500px;
width:100%
}

.table_information{
    border-style:solid;
    border-color:green;
    
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

<div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers">Phone Number</h2><label class="hiring-label">Please type below...</label><input class="hiring-inputs" placeholder="Please type in..."></div>

<form onsubmit = "" action = "/create-page" method = "POST">
    
<input class = "hiring-inputs" placeholder = "Type in the name of the project" name = "project_name"/>
<input class = "hiring-inputs" placeholder = "Type in the email you want for your paypal account" name = ""/>
<input class = "hiring-inputs" placeholder = "Type in the password you want for your paypal account"/>
<input class = "hiring-inputs" placeholder = "Type in the name you want for your database"/>
<input class = "hiring-inputs" placeholder = "Type in the name you want for your clients table"/>
<input class = "hiring-inputs" placeholder = "Type in the name you want for your cookies table"/>
<input class = "hiring-inputs" placeholder = "Type in the primary font you want for your page"/>
<input class = "hiring-inputs" placeholder = "Type in the secondary font you want for your page"/>
<label  for = "Do you want cookies in your website?"><input type = "checkbox"/>
<input class = "hiring-inputs" placeholder = "What do you want the title for your website to be?"/>
<input class = "hiring-inputs" placeholder = "How many years has your business existed?"/>
<input class = "hiring-inputs" placeholder = "Describe your business in synonyms(ex. metalworking, labor, teaching, etc.)..."/>
<input class = "hiring-inputs"  placeholder = "Where is your business located"/>
<input class = "hiring-inputs" placeholder = "How long has your business been open?"/>
<input class = "hiring-inputs" placeholder = "How many vertical sections do you want the page to be divided into"/>
<input class = "hiring-inputs" placeholder = "How many horizontal sections do you want in each vertical section">
<input class = "hiring-inputs" placeholder = "Do you want email enabled?">
<input class = "hiring-inputs" placeholder = "Do you want payment enabled?">
</form>
<input placeholder= "Products you want to discuss in each section of the page" type = "search"/>
<input placeholder= "Services you want to discuss in each section of the page" type = "search"/>
<input placeholder= "Hiring you want to discuss in each section of the page" type = "search"/>

<table>
    <tr>
<td class = "table_information"><button onclick = "accessPageInfo('','','?mysql_query=clients')">Clients Table</button></td>
<td class = "table_information"><button onclick = "accessPageInfo('','','?mysql_query=clients')">Records Table</button>
</td>
<td class = "table_information"><button onclick = "accessPageInfo('','','?mysql_query=clients')">Website Data</button></td>
<td class = "table_information"> <button onclick = "accessPageInfo('','','?mysql_query=clients')">Products for the Company</button> </td>
<td class = "table_information"> <button onclick = "accessPageInfo('','','?mysql_query=tracker')">Website Tracker</button> </td>


        
    </tr>
</table>


<div id = "display_section">
    <table><tr><td>Select Query</td><td>Insert Query</td></tr></table>

</div>`)
}
                                                                                                                   else{res.send("Error: An account with these credentials already exists")}

})})

app.use('/.netlify/functions/login_sub',router)

module.exports.handler = serverless(app)
