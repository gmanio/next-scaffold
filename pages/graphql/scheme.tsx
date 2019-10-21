import { gql } from 'apollo-server-micro';

const scheme = gql`
    type Query {
        users: [User!]!
    }
    type User {
        id: Int,
        name: String
    }
`;

export { scheme };

