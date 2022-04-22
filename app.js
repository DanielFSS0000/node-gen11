const express = require('express');
const { Sequelize } = require('sequelize');

//Routers
const {usersRouter} = require('./routes/users.routes')
//Init express app
const app = express();

//Enable incoming Json data 
app.use(express.json())

//Endpoints
//http://Localhost:4000/api/v1/users
app.use('/api/v1/', usersRouter);

// app.get('/posts', (req, res)=>{
//     res.status(200).json({ posts });
// });

//Conection db 
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'blogs'
});

db.authenticate()
.then(() => console.log('Database aunthenticated'))
.catch(err => console.log(err));

//Spin up server
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Express app runing on port: ${PORT}`);
})