const express = require('express')
const app = express()
const PORT = 4000

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const books = [
    {name: "Prima",
     type: "Strategy Guild"
},
    {name: "PC mazagine",
     type: "PC Magazine"
},
    {name: "PC Gamer",
     type: "Gaming Guide"
},
    {name: "Maxmimum PC",
     type: "Shopping Guide"
},
    {name: "Game Informer",
     type: "Gaming Guide"
},
    {name: "Nintendo Power",
     type: "Nintedo Games"
},
    {name: "PC Guide",
     type: "PC Magazine"
},
    {name: "Game FAQ",
     type: "Strategy Guild"
}
    
]

// for (let book of books) {
//     console.log(book)
// }

books.map((book) =>{
    console.log(book)
    console.log(book.name)
    console.log(book.type)
})






app.get('/', (req,res) =>{
    res.send('home page')
})
app.get('/books', (req,res) =>{
    res.send('book store')
})


app.post ('/addBooks', (req,res) =>{
    res.send('ok')
    let type = (req.body.type)
    let name = (req.body.name)
    console.log(type)
    console.log(name)
})






















app.listen(PORT, () =>{
    console.log (`running on ${PORT}`)
})