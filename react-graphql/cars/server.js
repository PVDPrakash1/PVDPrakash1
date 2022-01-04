const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");





const app = express()
app.get("/", (req, res) => {
    res.send("Welcome")
})

// const root = resolvers

app.get("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true

}))

app.listen(5000, () => { console.log('server running') })
