require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL);

const officesRouter = require('./routes/offices.router');
const customersRouter = require('./routes/customers.router');
const employeesRouter = require('./routes/employees.router');

app.use('/offices', officesRouter);
app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);

// test api
app.get('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'hello from api',
  });
});

// port
const PORT = process.env.PORT || 3000;

// server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
