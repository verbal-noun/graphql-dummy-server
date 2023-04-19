const express = require("express")
// The method has been destructured
const expressGraphQL = require('express-graphql').graphqlHTTP
const app = express()

app.use('/graphql', expressGraphQL({
    graphiql: true
}))
app.listen(5002, () => console.log("Server Running"))