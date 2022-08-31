/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
      carModelId
      carKeyId
      carLocationId
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
      carModelId
      carKeyId
      carLocationId
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
      carModelId
      carKeyId
      carLocationId
    }
  }
`;
export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
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
  }
`;
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
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
  }
`;
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
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
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      cars {
        id
        name
        description
        places
        createdAt
        updatedAt
        modelCarsId
        carModelId
        carKeyId
        carLocationId
      }
      keys {
        id
        createdAt
        updatedAt
      }
      travel {
        id
        dateBegin
        dateEnd
        places
        createdAt
        updatedAt
        travelDriverId
        travelCarId
        travelModelId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      cars {
        id
        name
        description
        places
        createdAt
        updatedAt
        modelCarsId
        carModelId
        carKeyId
        carLocationId
      }
      keys {
        id
        createdAt
        updatedAt
      }
      travel {
        id
        dateBegin
        dateEnd
        places
        createdAt
        updatedAt
        travelDriverId
        travelCarId
        travelModelId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      cars {
        id
        name
        description
        places
        createdAt
        updatedAt
        modelCarsId
        carModelId
        carKeyId
        carLocationId
      }
      keys {
        id
        createdAt
        updatedAt
      }
      travel {
        id
        dateBegin
        dateEnd
        places
        createdAt
        updatedAt
        travelDriverId
        travelCarId
        travelModelId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createKey = /* GraphQL */ `
  mutation CreateKey(
    $input: CreateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    createKey(input: $input, condition: $condition) {
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
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateKey = /* GraphQL */ `
  mutation UpdateKey(
    $input: UpdateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    updateKey(input: $input, condition: $condition) {
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
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteKey = /* GraphQL */ `
  mutation DeleteKey(
    $input: DeleteKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    deleteKey(input: $input, condition: $condition) {
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
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const createTravel = /* GraphQL */ `
  mutation CreateTravel(
    $input: CreateTravelInput!
    $condition: ModelTravelConditionInput
  ) {
    createTravel(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        modelCarsId
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
      locations {
        nextToken
      }
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
export const updateTravel = /* GraphQL */ `
  mutation UpdateTravel(
    $input: UpdateTravelInput!
    $condition: ModelTravelConditionInput
  ) {
    updateTravel(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        modelCarsId
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
      locations {
        nextToken
      }
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
export const deleteTravel = /* GraphQL */ `
  mutation DeleteTravel(
    $input: DeleteTravelInput!
    $condition: ModelTravelConditionInput
  ) {
    deleteTravel(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        modelCarsId
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
      locations {
        nextToken
      }
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
