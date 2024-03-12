import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(
      new ErrorHandler("Please fill the full reservation form!", 400)
    );
  }

  try {
    // Create a new reservation using the Reservation model
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    // Respond with success status and the created reservation
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "validatonError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
