import { gql } from "@apollo/client";

const ADD_EVENT = gql`
  mutation addEvent(
    $name: String!
    $description: String!
    $dateOfEvent: String!
  ) {
    addEvent(
      name: $name
      description: $description
      dateOfEvent: $dateOfEvent
    ) {
      id
      name
      description
    }
  }
`;

const DELETE_EVENT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export { ADD_EVENT, DELETE_EVENT };
