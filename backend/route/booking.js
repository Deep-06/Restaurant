const express=require('express');
const {addBooking}=require('../controller/booking');
const {BookingModel}=require('../model/bookingModel')

const bookRouter=express.Router();

bookRouter.post("/add", addBooking);

bookRouter.get("/", async (req,res) => {
    try {
        const book = await BookingModel.find()
        res.status(200).send(book)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})


module.exports = {
    bookRouter
}