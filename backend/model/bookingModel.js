const mongoose=require('mongoose');
const validator=require('validator');


// Booking Schema
const bookingSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contains atleast 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contains atleast 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate:  [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contains atleast 10 digits"],
        maxLength: [10, "Phone number cannot exceed 10 digits"],
    },
    time: {
        type: String,
        required: true,  
    },
    date: {
        type: String,
        required: true,
    },
},
{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  }
  )


// Booking Model
const BookingModel=mongoose.model('Booking',bookingSchema);

module.exports={
    BookingModel
}