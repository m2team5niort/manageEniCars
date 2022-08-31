/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
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
export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel($filter: ModelSubscriptionModelFilterInput) {
    onCreateModel(filter: $filter) {
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
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel($filter: ModelSubscriptionModelFilterInput) {
    onUpdateModel(filter: $filter) {
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
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel($filter: ModelSubscriptionModelFilterInput) {
    onDeleteModel(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey($filter: ModelSubscriptionKeyFilterInput) {
    onCreateKey(filter: $filter) {
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
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey($filter: ModelSubscriptionKeyFilterInput) {
    onUpdateKey(filter: $filter) {
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
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey($filter: ModelSubscriptionKeyFilterInput) {
    onDeleteKey(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTravel = /* GraphQL */ `
  subscription OnCreateTravel($filter: ModelSubscriptionTravelFilterInput) {
    onCreateTravel(filter: $filter) {
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
export const onUpdateTravel = /* GraphQL */ `
  subscription OnUpdateTravel($filter: ModelSubscriptionTravelFilterInput) {
    onUpdateTravel(filter: $filter) {
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
export const onDeleteTravel = /* GraphQL */ `
  subscription OnDeleteTravel($filter: ModelSubscriptionTravelFilterInput) {
    onDeleteTravel(filter: $filter) {
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
