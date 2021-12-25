const { ApolloServer, gql } = require("apollo-server")
const mongoose = require("mongoose");
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const PORT = 4000

// connect to mongo
const URL = 'mongodb+srv://nasr:099013090@vue-qynta.mongodb.net/nash-blog?retryWrites=true&w=majority'

mongoose.connect(URL)
mongoose.connection.once('open', () => {
  console.log('DB connection initialized!');
})

mongoose.connection.on('error', () => {
  console.log('Something wrong while connecting to mongo!!!');
})

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(PORT).then(({url}) => {
  console.log(`Server Started at ${url}`)
})
