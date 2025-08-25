'use strict'
const paypal = require('paypal-rest-sdk');
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var config = {username:"if0_39396345",password:"4tOjlR3DNfnec",database:"if0_39396345_atypickal_marketing",host:"sql300.infinityfree.com"}
paypal.configure({
    'mode': 'sandbox',  
    'client_id': 'AaMImpCxxcXNUxBkP3cHBWi1SzFsXlY5PC2r97dgjtj5ejTMwHp1og79KTlbIBoU_dUbznrBeL0JC3fJ',
    'client_secret': 'EB7cb7p7iRx-L5m56F7JISLRdkunE5vq8S9ViHJo5CCIz8p5klNrby3JMNHvAZA-3jkI4DrqevTQ6isu'
});

app.use('/',(req,res)=>{
  const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Red Sox Hat",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Hat for the best team ever"
        }]
    };
})
app.use('/.netlify/functions/payment_sub',router)
module.exports.handler
