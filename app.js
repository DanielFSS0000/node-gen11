const express = require('express');
const { Sequelize } = require('sequelize');

//Routers
const {usersRouter} = require('./routes/users.routes')
//utils
const { db } = require('./utils/database')
//Init express app
const app = express();

//Enable incoming Json data 
app.use(express.json())

//Endpoints
//http://Localhost:4000/api/v1/users
app.use('/api/v1/users', usersRouter);

// app.get('/posts', (req, res)=>{
//     res.status(200).json({ posts });
// });

db.authenticate()
    .then(() => console.log('Database aunthenticated'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(() => console.log(err));
//Spin up server
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Express app runing on port: ${PORT}`);
})