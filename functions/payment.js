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

app.use('/',(req,res)=>{res.send(`<link href = "/styles.css" rel = "stylesheet"/>
<div class="product-images-container" id="product-images-container-1">
  <form action = "/.netlify/functions/payment_sub" method = "POST"><img class="product-images">
    <h2>Product</h2>
  <input class="product-titles" value="product">
  <br>
<p style="font-family:Helvetica;text-align:center">$20.00</p>
    <input style="display:none;" class="price" value="20">
    <label>Quantity</label><input class="select-quantity">
    <button class="buy-button">Buy Now</button></form>
  </div>`)})

app.use('/.netlify/functions/payment',router)
module.exports.handler = serverless(app)
