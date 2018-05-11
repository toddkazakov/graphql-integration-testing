
import gql from "graphql-tag";

const root = gql`
  type Query {
      findPlace(input: FindPlaceInput!): FindPlaceResult!
  }
  
  input FindPlaceInput {
      name: String!
  }
  
  type FindPlaceResult {
      place: Place
  }
  
  type Place {
      id: String!
      name: String!
      lat: String!
      long: String!
  }
`;

export {
  root,
};
