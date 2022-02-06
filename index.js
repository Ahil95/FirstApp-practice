const express = require("express")

const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log("We got a first place")
//     // res.send("Sorry Couldn't find the server")
//     res.send({ color: 'red' })
// })
app.get('/about', (req, res) => {
    console.log('Welcome')
})

app.get('/', (req, res) => {

    console.log('Welcome Home!')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`${postId},${subreddit}`)
})

app.get('/docs', (req, res) => {
    console.log('here is your docs!')
})
app.listen(8080, () => {
    console.log("Listening on port 3000")
})