const express = require('express');
const app = express();
app.use(express.static('./images/'))

app.get('/', (req, res)=>{
    // res.send({ message: 'Success!' })
    res.sendFile(__dirname+'/views/home.html')
})
app.get('/detail/:alias',(req,res)=>{
    let alias = req.params.alias
    if(alias === undefined){
        alias = 'default';
    }
    // let alias = req.param('alias','default')
    res.send({ alias })
})

const port = 3000;
app.listen(port, ()=>console.log(`Server start on port ${port}`))