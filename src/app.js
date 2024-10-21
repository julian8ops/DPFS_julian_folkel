require('dotenv').config();
const express = require('express');
const path = require("path");

const homeRouter = require('./routes/homeRoutes');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:` + port);
});

module.exports = app;
