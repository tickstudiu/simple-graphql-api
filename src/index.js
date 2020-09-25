import { GraphQLServer } from "graphql-yoga";

// type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '123456789',
                name: 'wanchalerm suksawat',
                email: 'wanchalerm@email.com',
                age: 24
            }
        },

        post() {
            return {
                id: '123456789',
                title: 'Simple GQL',
                body: 'ez right?',
                published: true
            }
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