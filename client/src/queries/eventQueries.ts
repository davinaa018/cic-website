import { gql } from "@apollo/client";

const GET_EVENTS = gql`
  query getEvents {
    events {
      id
      name
      description
      dateOfEvent
    }
  }
`;

const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      name
      description
      dateOfEvent
    }
  }
`;

export { GET_EVENTS, GET_EVENT };
