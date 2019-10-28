// import { NextApiRequest, NextApiResponse } from 'next';
import { dbHelper } from '../middleware/dbHelper';
import { scheme } from '../graphql/scheme';
import { ApolloServer } from 'apollo-server-micro';

const resolvers = {
  Query: {
    users (parent, args, context) {
      console.log(parent);
      console.log(args);
      console.log(context);
      return [{ id: 30, name: 'Nextjs' }]
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs: scheme, resolvers });

export const config = { api: { bodyParser: false } };

export default apolloServer.createHandler({ path: '/api/salary' });