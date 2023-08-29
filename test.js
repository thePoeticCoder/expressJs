const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.get('/',(req,res)=>{ //get request to send the file for use 
    res.render('index',{
        title:'My Home Page of the ejs' // title tags for ejs files 
    });  // take the path of current folder and add index path in it 
}); // routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})