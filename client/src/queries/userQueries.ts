import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      fullName
      email
      schoolId
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      fullName
      email
      schoolId
    }
  }
`;

export { GET_USERS };
