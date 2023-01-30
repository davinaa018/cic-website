import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($fullName: String!, $email: String!, $schoolId: String!) {
    createUser(fullName: $fullName, email: $email, schoolId: $schoolId) {
      id
      fullName
      email
      schoolId
    }
  }
`;

export { CREATE_USER };
