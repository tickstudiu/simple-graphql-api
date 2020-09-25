import { GraphQLServer } from "graphql-yoga";

// type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        locations: String!
        bio: String!
    }
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return "This is my first query!!"
        },
        name() {
            return "Wanchalerm Suksawat"
        },
        locations(){
            return "Hatyai"
        },
        bio(){
            return "Hi, my name is Nice and I'm developer"
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("The server is UP!");
})