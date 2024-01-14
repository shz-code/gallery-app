const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();

if (process.env.NODE_ENV == "development") {
  mongoose
    .connect(process.env.LOCAL_DB_URL)
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => console.log(err));
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
