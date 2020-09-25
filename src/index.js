import { GraphQLServer } from "graphql-yoga";

// type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name: String): String!
        add(x: Float!, y: Float!): Float!
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
        greeting(parent, args, ctx, info) {
            if  (args.name){
                return `Hello! ${args.name}`
            }

            return `Hello!`
        },

        add(parent, args, ctx, info) {
            return args.x + args.y
        },

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

