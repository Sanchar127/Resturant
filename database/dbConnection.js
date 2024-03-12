import mongoose, { connect } from "mongoose";
export const dbconnection = () => {
  mongoose
    .connect(process.env.MongoDB_URI, {
      dbName: "RESTURANT",
    })
    .then(() => {
      console.log(`database connection sucessfully`);
    })
    .catch((err) => {
      console.log(`some error occured while connecting to database ${err}`);
    });
};
