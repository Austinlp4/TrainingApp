import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query {
  user {
    count
    data {
      firstName
      lastName
      roles {
        name
      }
    }
  }
}
`