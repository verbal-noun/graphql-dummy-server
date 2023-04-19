const express = require("express")
// The method has been destructured
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')
const app = express()

// Defining a dummy schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        // Name cannot have space in between
        name: 'HelloWorld',
        // What fields will our query return
        fields: () => ({
            message: { 
                type: GraphQLString,
                // We need to know how to get the output
                resolve: () => 'Hello World'
            }
        })
    })
})
app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema: schema
}))
app.listen(5002, () => console.log("Server Running"))