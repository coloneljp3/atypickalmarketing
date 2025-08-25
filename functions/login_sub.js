'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var config = {user:"if0_39396345",password:"4tOjlR3DNfnec",host:"sql300.infinityfree.com"}
app.use('/',(req,res)=>{
var user = req.body.username
var psw = req.body.psw
var conn = mysql.createConnection(config)
   res.send(`<link href = "/styles.css" rel = "stylesheet"/><style>label{font-family:Verdana}</style>
<form action = "/.netlify/functions/results" method = "POST">
<label>Owner's First Name</label>    
<input class = "hiring-inputs" name = "first_name" placeholder = "Type in your first name" />
<label>Owner's Last Name</label>    
<input class = "hiring-inputs" name = "last_name" placeholder = "Type in your last name" />
<label>Project Name</label>    
<input class = "hiring-inputs" name = "project_name" placeholder = "Type in the name of the project" />
    <label>PayPal Email</label>    
<input class = "hiring-inputs" placeholder = "Type in the email you want for your paypal account" name = "paypal_email"/>
    <label>PayPal Password</label>    
<input class = "hiring-inputs" name = "paypal_password" placeholder = "Type in the password you want for your paypal account"/>
    <label>Name of Clients Table</label>    
<input class = "hiring-inputs" name = "clients_table_name" placeholder = "Type in the name you want for your clients table"/>
    <label>Name of Cookies Table</label>   
<input class = "hiring-inputs" name = "cookies_table_name" placeholder = "Type in the name you want for your cookies table"/>
    <label>Primary Font</label>    
<input class = "hiring-inputs" name = "primary_font" placeholder = "Type in the primary font you want for your page"/>
    <label>Secondary Font</label>    
<input class = "hiring-inputs" name = "secondary_font" placeholder = "Type in the secondary font you want for your page"/>
    <label>Title</label>    
<input class = "hiring-inputs" name = "title" placeholder = "What do you want the title for your website to be?"/>
    <label>Age of the Business</label>    
<input class = "hiring-inputs" name = "age_of_business" placeholder = "How many years has your business existed?"/>
    <label>Synonyms for your Business</label>    
<input class = "hiring-inputs" name = "synonyms" placeholder = "Describe your business in synonyms(ex. metalworking, labor, teaching, etc.)..."/>
    <label>Location</label>    
    <input class = "hiring-inputs" name = "description" placeholder = "Describe your business"/>
    <label>Description</label>    
    <input class = "hiring-inputs" name = "primary_font" placeholder = "What is your primary font"/>
    <label>Primary Font</label>    
     <input class = "hiring-inputs" name = "secondary_font" placeholder = "What is your secondary font"/>
    <label>Secondary Font</label>  
<input class = "hiring-inputs"  name = "location" placeholder = "Where is your business located"/>
    <label>Number of Vertical Sections</label>    
<input class = "hiring-inputs" name = "vertical_sections" placeholder = "How many vertical sections do you want the page to be divided into"/>
    <label>Number of Horizontal Sections</label>    
<input class = "hiring-inputs" name = "horizontal_sections" placeholder = "How many horizontal sections do you want in each vertical section">
   <button>Send Form</button>
</form>`)
})

app.use('/.netlify/functions/login_sub',router)

module.exports.handler = serverless(app)
