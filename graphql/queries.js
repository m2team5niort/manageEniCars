/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      name
      description
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      places
      key {
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
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        createdAt
        updatedAt
        locationKeysId
        keyLocationId
        keyCarId
      }
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      modelCarsId
      locationCarsId
      carModelId
      carKeyId
      carLocationId
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
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
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
        cars {
          nextToken
        }
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
      keys {
        items {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
        nextToken
      }
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
        cars {
          nextToken
          items {
            id
            name
            description
            places
            createdAt
            updatedAt
            modelCarsId
            locationCarsId
            carModelId
            carKeyId
            carLocationId
          }
        }
        keys {
          nextToken
        }
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
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
      locationKeysId
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
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        createdAt
        updatedAt
        locationKeysId
        keyLocationId
        keyCarId
      }
      nextToken
    }
  }
`;
