import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { schema } from './Schema'
const main = async () => {
    await createConnection({
        type: 'mysql',
        database: 'fullstack',
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: []

    });
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(3001, () => {
        console.log("listening on")
    })
}

main().catch((err) => {
    console.log(err)
})