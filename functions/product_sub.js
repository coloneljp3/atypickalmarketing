'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var config = {user:"if0_39396345 ",password:"4tOjlR3DNfnec",database:"if0_39396345_atypickal_marketing",host:"sql300.infinityfree.com"}
app.use('/',(req,res)=>{
var body = req.body
var name = body.name
var price = body.price
var inventory = body.inventory
var url = body.url
var conn = mysql.createConnection(config)
conn.query(`INSERT INTO Products(name,price,inventory,url) VALUES(?,?,?)`,[name,price,inventory,url],(err,results)=>{
res.send(`A new product has been added to the database.`)    
})


})


app.use('/.netlify/functions/product_sub',router)
module.exports.handler = serverless(app)
