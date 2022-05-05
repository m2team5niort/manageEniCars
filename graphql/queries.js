/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        modele
        places
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listModels = /* GraphQL */ `
  query ListModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        brand
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKey = /* GraphQL */ `
  query GetKey($id: ID!) {
    getKey(id: $id) {
      id
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        createdAt
        updatedAt
      }
      car {
        id
        name
        description
        modele
        places
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      keyLocationId
      keyCarId
    }
  }
`;
export const listKeys = /* GraphQL */ `
  query ListKeys(
    $filter: ModelKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        location {
          id
          name
          city
          departement
          zip
          streetNumber
          longitude
          latitude
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          modele
          places
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        keyLocationId
        keyCarId
      }
      nextToken
    }
  }
`;
