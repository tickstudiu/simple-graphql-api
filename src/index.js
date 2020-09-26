import { GraphQLServer } from "graphql-yoga";

const users = [{
    id: '1',
    name: 'Andrew',
    email: 'Andrew@email.com',
    age: 27
}, {
    id: '2',
    name: 'Sarah',
    email: 'Sarah@email.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'Mike@email.com'
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false
}, {
    id: '12',
    title: 'Line chat bot',
    body: '',
    published: false
}]

// type definitions (schema)
const typeDefs = `
    type Query {
        posts(query: String): [Post!]!
        users(query: String): [User!]!
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
        users(parent, args, ctx, info) {
            if(!args.query) return users

            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },

        posts(parent, args, ctx, info){
            if(!args.query) return posts

            return posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())

                return isTitleMatch || isBodyMatch
            })
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

