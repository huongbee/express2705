const express = require('express');
const app = express();
app.use(express.static('./images/'))

app.get('/', (req, res)=>{
    // res.send({ message: 'Success!' })
    name = 'Nam';
    res.sendFile(__dirname+'/views/home.html')
})

const port = 3000;
app.listen(port, ()=>console.log(`Server start on port ${port}`))