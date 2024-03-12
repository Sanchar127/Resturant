import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "first name must have atleast 3 character"],
    maxlength: [30, "first name cannot exceed 30 character"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "last name must have atleast 3 character"],
    maxlength: [30, "last name cannot exceed 30 character"],
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Provide valid email"],
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone number must content 10 digit"],
    maxlength: [10, "phone number must content 10 digit"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
