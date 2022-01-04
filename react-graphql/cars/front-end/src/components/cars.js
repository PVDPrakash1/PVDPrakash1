import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CARS } from "../GraphQL/Queries";

function GetCars() {
  const { error, loading, data } = useQuery(LOAD_CARS);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    if (data) {
        setCars(data.getAllCars);
    }
  }, [data]);

  return (
    <div>
      {cars.map((val) => {
        return <h1> {val.name}</h1>;
      })}
    </div>
  );
}

export default GetCars;