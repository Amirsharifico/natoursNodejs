const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.status(200).json({message:"message", app:"Nature"});
})

const port =3000;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}...`)
});

