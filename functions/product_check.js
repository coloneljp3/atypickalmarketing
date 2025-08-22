'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var config = {user:"if0_39396345 ",password:"4tOjlR3DNfnec",database:"if0_39396345_atypickal_marketing",host:"sql300.infinityfree.com
"}
app.use('/',(req,res)=>{
var body = req.body
var name = body.name
var price = body.price
var inventory = body.inventory
var url = body.url
var conn = mysql.createConnection(config)

conn.query(`Select * from Products`,(err,result)=>{
var a = "";
    for(let i of result){
    let n = result["name"]
    let p = result["price"]
    let i = result["inventory"]
    let u = result["url"]
a+=`<div class="product-images-container" id="product-images-container-1">
  <form action = "/.netlify/functions/pay" method = "POST"><img class="product-images">
    <h2>`+n+`</h2>
  <input class="product-titles" value="`+n+`">
  <br>
<p style="font-family:Helvetica;text-align:center">`+p+`</p>
    <input style="display:none;" class="price" value="`+p+`">
    <label>Quantity</label><input class="select-quantity">
    <button class="buy-button">Buy Now</button></form>
  </div>`
    
}
res.send(a)    

})
})

app.use('/.netlify/functions/product_check',router)
module.exports.handler = serverless(app)
