const {ErrorHandler}=require('../middleware/errorMiddleware');
const {BookingModel}=require('../model/bookingModel');

const addBooking = async (req,res,next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler('Please fill full form', 400));
    }

    try{
        await BookingModel.create({firstName, lastName, email, phone, date, time});
        res.status(200).json({
            success: true,
            message: "Booking successful",
        });
    }catch(error){
        if(error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
         return next(error);
    }
};

module.exports={
    addBooking
}