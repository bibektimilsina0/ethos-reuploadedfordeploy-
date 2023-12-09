const express=require('express')
const app=express();
const {people}=require('./data')
const {readFile} = require('fs')
app.use(express.static('./methods-public'))
app.get('/api/people',(req,res)=>{
   res.status(200).json(people)
})
app.get('/api/crypto',(req,res)=>{
   const file =readFile('./cryptoapi/place.json','utf8',(err,data)=>{
      res.status(200).send(data)
      res.end()
   })

})
app.listen(5000,(req,res)=>{
   console.log('listening on port 5000');
})

