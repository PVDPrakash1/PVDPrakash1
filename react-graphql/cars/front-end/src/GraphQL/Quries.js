import { gql } from "@apollo/client";

export const LOAD_CARS = gql`
  query {
    getAllCars{
      id,
      name
    }
  }
`;