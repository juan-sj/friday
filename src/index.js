const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req,res)=> {res.send('welcome');});

app.post('/', (req,res)=>  {
    let data;
    let data1;
    let data2;
    data=req.body.data;
    data1=data.split(':')
   
    data2=data1[0];
    data2=data2.slice(0,3)
    console.log(data2);
    console.log(data1[1]);
    res.json({status: "executed"});
});

app.listen(port, () => { console.log(`server running on ${port}`)});

//CALLBACKs