// this import the express
const express = require('express')
// router allows us to make routes in a more organized way
const router = express.Router()

router.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-')
})

// ROOT
// localhost:3000/api/
router.get('/', (req, res) => {
 res.status(200).json({
   api_version: 'v1.0.0',
   posts: '/posts'
 })
})

// INDEX
router.get('/candies', (req, res) => {
 res.status(200).json([
   {"id":1,"name":"Chewing Gum","color":"Red"},
   {"id":2,"name":"Pez","color":"Green"},
   {"id":3,"name":"Marshmallow","color":"Pink"},
   {"id":4,"name":"Candy Stick","color":"Blue"}])
})

// SHOW
router.get('/candies/:id', (req, res) => {
 res.status(200).json({results: `posts${req.params.id}`

 })
})
// new (it won't happen with an api)
// edit (it won't happen with an api)

// CREATE
router.post('/posts', (req, res) => {
  console.log(req.body)
  res.status(201).json({
    message: 'post created',
    title: req.body.title
})
})
// UPDATE
router.put('/posts/:id', (req, res) => {
 res.status(200).json({message: `post${req.params.id} updated`})
})
// DELETE
router.delete('/posts/:id', (req, res) => {
 res.status(200).json({message: `post${req.params.id} deleted`})
})
module.exports = router
