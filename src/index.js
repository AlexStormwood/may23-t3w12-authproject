require('dotenv').config();

const { databaseConnect } = require ('./database');
const { app } = require ('./server');

const PORT = process.env.PORT;

app.listen(PORT, async()=> {
    await databaseConnect();
    console.log("Server running")
})