const express = require('express')
const app = express()
const port = 3000

const adminUsers = [

    {
        name:"gina",
        employment:"employed",
        role:"admin"
    }, 

    {
        name:"jeff",
        employment:"student",
        role:"admin"
    }, 


]


app.use(express.json())

app.get('/', (req, res)=>{

    res.status(200).json(adminUsers)

})

app.get('/user/:name', (req, res)=>{

    let findUser = adminUsers.filter(user => user.name === req.params.name )
    res.status(200).json(findUser)

})

app.post('/add' , auth , (req, res)=>{

    adminUsers.push(req.body)

    res.status(201).json(adminUsers)

})


function auth(req, res, next){
    
    if (req.body.role === "admin"){
        
        next()

    } else{
        res.status(403).json("This page/route is only accessible to admins")
    }

}


app.listen(port, ()=>{

    console.log("Hey the server is running")
})
