const express=require('express');
const {addBooking}=require('../controller/booking')

const bookRouter=express.Router();

bookRouter.post("/add", addBooking);


module.exports = {
    bookRouter
}