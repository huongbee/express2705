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

app.get('/:pheptinh/:a/:b',(req, res)=>{
    try {
        let { pheptinh, a, b } = req.params
        pheptinh = pheptinh.toLowerCase()
        arrPheptinh = ['cong','tru','nhan','chia','chiadu'];
        if(arrPheptinh.find(pt => pheptinh===pt)){
            const cal = new Calculatetor(pheptinh, a, b)
            res.send({
                pheptinh: cal.pt,
                a: +a,
                b: +b,
                result: cal.result
            })
        }
        else{
            res.send({ error: true, message: 'CANNOT FIND OPERATOR!'})
        }
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
})

const port = 3000;
app.listen(port, ()=>console.log(`Server start on port ${port}`))

class Calculatetor{
    constructor(pheptinh, a, b){
        this.pheptinh = pheptinh;
        this.a = a;
        this.b = b;
    }
    get pt(){
        if(this.pheptinh==='cong') return '+';
        if(this.pheptinh==='tru') return '-';
        if(this.pheptinh==='nhan' ) return '*';
        if(this.pheptinh==='chia' && this.b!=0 ) return '/';
        if(this.pheptinh==='chiadu' && this.b!=0) return '%';
        throw new Error('Math error!')
    }
    get result(){
        let r = this.a+this.pt+this.b;  // r=2+3
        return eval(r);
    }
}