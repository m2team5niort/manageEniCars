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
          isReferenced
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
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
        isReferenced
        createdAt
        updatedAt
      }
      available
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
          isReferenced
          createdAt
          updatedAt
        }
        available
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
          available
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
          available
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
      isReferenced
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
        }
        keys {
          nextToken
        }
        isReferenced
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
        isReferenced
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
          isReferenced
          createdAt
          updatedAt
        }
        available
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
          isReferenced
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTravel = /* GraphQL */ `
  query GetTravel($id: ID!) {
    getTravel(id: $id) {
      id
      driver {
        id
        name
        email
        isAdmin
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
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
      dateBegin
      dateEnd
      places
      departure {
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
        isReferenced
        createdAt
        updatedAt
      }
      arrival {
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
        isReferenced
        createdAt
        updatedAt
      }
      passengers
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
      travelDepartureId
      travelArrivalId
    }
  }
`;
export const listTravels = /* GraphQL */ `
  query ListTravels(
    $filter: ModelTravelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTravels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driver {
          id
          name
          email
          isAdmin
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        dateBegin
        dateEnd
        places
        departure {
          id
          name
          city
          departement
          zip
          streetNumber
          longitude
          latitude
          isReferenced
          createdAt
          updatedAt
        }
        arrival {
          id
          name
          city
          departement
          zip
          streetNumber
          longitude
          latitude
          isReferenced
          createdAt
          updatedAt
        }
        passengers
        createdAt
        updatedAt
        travelDriverId
        travelCarId
        travelModelId
        travelDepartureId
        travelArrivalId
      }
      nextToken
    }
  }
`;
export const getIncident = /* GraphQL */ `
  query GetIncident($id: ID!) {
    getIncident(id: $id) {
      id
      name
      criticality
      date
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      responsible {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      incidentCarId
      incidentResponsibleId
    }
  }
`;
export const listIncidents = /* GraphQL */ `
  query ListIncidents(
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        criticality
        date
        car {
          id
          name
          description
          places
          available
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        responsible {
          id
          name
          email
          isAdmin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        incidentCarId
        incidentResponsibleId
      }
      nextToken
    }
  }
`;
