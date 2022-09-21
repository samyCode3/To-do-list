const express = require("express");
const path = require("path")
const app = express();
const router = require("./router/pages")
const controllers = require("./controller/auth")
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router)
app.use("/api", controllers)


app.listen(PORT, console.log(`Server running on port ${PORT}`));
