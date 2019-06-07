const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    // res.send({ message: 'Success!' })
    // res.sendFile()
})

const port = 3000;
app.listen(port, ()=>console.log(`Server start on port ${port}`))