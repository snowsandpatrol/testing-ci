const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/routes')

//port needs to be defined.

//whenever this '/' is hit, we will get req and res.
// app.get('/',(req,res) => {
//   res.json({message: "Hello World"})
// })

//configure express to look inside views folder to use ejs file
app.set ('views','./views')
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/', router)

// app.use((req,res,next) => {
//   console.log(`${req.method} request to ${req.path} from ${req.ip}`)
//   next()
// })

//this is another way of doing it, with status return
app.get('/',(req,res) => {
  res.render('index',{title:'My Website'})
  // res.status(200).json({message: "Hello World"})
})

app.get('/candies',(req,res) => {
  res.status(200).json({posts:["Hello World"]})
})

app.listen(3000,() => {
  console.log('server listening on port 3000')
})
